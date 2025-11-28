import React, { useState, useEffect, useCallback } from 'react';
import { URLStateProvider } from '@parca/components';

export function AppRouterProvider({ children }) {
    // Force render on URL change
    const [currentPath, setCurrentPath] = useState(window.location.pathname + window.location.search);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname + window.location.search);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const navigateTo = useCallback((url, queryParams, options) => {
        const searchParams = new URLSearchParams();
        Object.entries(queryParams).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach(v => searchParams.append(key, v));
            } else if (value !== undefined && value !== null) {
                searchParams.set(key, value);
            }
        });

        const queryString = searchParams.toString();
        const newUrl = `${url.split('?')[0]}${queryString ? '?' + queryString : ''}`;

        if (options?.replace) {
            window.history.replaceState(null, '', newUrl);
        } else {
            window.history.pushState(null, '', newUrl);
        }

        // Update local state to trigger re-render of URLStateProvider
        setCurrentPath(newUrl);
    }, []);

    return (
        <URLStateProvider navigateTo={navigateTo}>
            {children}
        </URLStateProvider>
    );
}
