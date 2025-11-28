import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Globe, ShieldAlert, FileWarning } from 'lucide-react';

const Pitfall = ({ icon: Icon, title, children, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-start gap-6 p-6 bg-surface/50 backdrop-blur-md rounded-xl border border-red-500/20 hover:border-red-500/40 transition-colors group"
    >
        <div className="p-3 bg-red-500/10 rounded-xl text-red-400 group-hover:text-red-300 group-hover:bg-red-500/20 transition-all shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            <Icon size={28} />
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2 text-red-100">{title}</h3>
            <div className="text-base text-muted/90 leading-relaxed">{children}</div>
        </div>
    </motion.div>
);

export default function PitfallsNuances() {
    return (
        <div className="max-w-5xl w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-bold mb-4 text-white">Pitfalls & Nuances</h2>
                <p className="text-xl text-muted">With great power comes great responsibility.</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
                <Pitfall icon={Globe} title="Browser Limits" delay={0.2}>
                    URLs have a length limit (typically ~2KB). <span className="text-white font-medium">Avoid</span> storing large datasets or massive JSON blobs directly in the URL. Use IDs or compressed formats.
                </Pitfall>

                <Pitfall icon={ShieldAlert} title="Sensitive Data Leakage" delay={0.4}>
                    URLs are logged in browser history, server logs, and proxies. <span className="text-white font-medium">Never</span> put PII, tokens, or secrets in the URL.
                </Pitfall>

                <Pitfall icon={FileWarning} title="Breaking Changes" delay={0.6}>
                    If you rename a parameter or change a data structure, old URLs that users have bookmarked will break. You need a <span className="text-white font-medium">migration strategy</span>.
                </Pitfall>
            </div>
        </div>
    );
}
