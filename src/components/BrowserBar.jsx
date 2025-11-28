import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';

export function BrowserBar({ relevantParams = [] }) {
    const [url, setUrl] = useState(window.location.href);

    useEffect(() => {
        const updateUrl = () => setUrl(window.location.href);

        // Listen for popstate events (back/forward)
        window.addEventListener('popstate', updateUrl);

        // Create a custom event for pushState/replaceState since they don't trigger listeners by default
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function (...args) {
            originalPushState.apply(this, args);
            updateUrl();
        };

        history.replaceState = function (...args) {
            originalReplaceState.apply(this, args);
            updateUrl();
        };

        return () => {
            window.removeEventListener('popstate', updateUrl);
            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;
        };
    }, []);

    // Filter query parameters
    const currentUrl = new URL(url);
    const searchParams = new URLSearchParams(currentUrl.search);
    const filteredParams = new URLSearchParams();

    if (relevantParams.length > 0) {
        searchParams.forEach((value, key) => {
            if (relevantParams.includes(key)) {
                filteredParams.append(key, value);
            }
        });
    } else {
        // If no relevantParams specified, show all (or maybe none? let's default to all for now to be safe, or just empty if we want to be strict)
        // Based on request "only the params related to the current demo app", defaulting to all might be noisy.
        // But for safety let's copy all if relevantParams is empty/undefined to avoid breaking other usages if any.
        // Actually, let's strictly follow the plan: "Filter window.location.search to only include keys present in relevantParams".
        // If relevantParams is empty, filteredParams is empty.
    }

    const queryString = filteredParams.toString();
    const displayUrl = `.../?${queryString}`;

    return (
        <motion.div
            className="fixed bottom-32 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 bg-[#0d1117]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl max-w-5xl w-full mx-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/5 overflow-hidden">
                <span className="text-primary/80 font-mono text-sm truncate w-full">{displayUrl}</span>
            </div>

            <button
                onClick={() => window.location.reload()}
                className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all active:scale-95 active:rotate-180 duration-500"
                title="Reload Page"
            >
                <RotateCw size={18} />
            </button>
        </motion.div>
    );
}
