import React from 'react';
import { motion } from 'framer-motion';
import { useURLStateCustom } from '@parca/components';
import { BrowserBar } from '../../components/BrowserBar';

// Child component that handles the actual state and UI
// We use a key on this component to force a remount when serializationMode changes
function ComplexStateContent({ serializationMode, setSerializationMode }) {
    const [config, setConfig] = useURLStateCustom('state', {
        defaultValue: {
            theme: 'dark',
            notifications: true,
            date: new Date().toISOString().split('T')[0]
        },
        parse: (val) => {
            if (serializationMode === 'json') {
                try {
                    return JSON.parse(val);
                } catch {
                    return { theme: 'dark', notifications: true, date: new Date().toISOString().split('T')[0] };
                }
            } else {
                try {
                    const [theme, notifStr, date] = val.split('|');
                    // Basic validation to check if it looks like our custom format
                    if (!theme || !date) throw new Error('Invalid custom format');
                    return {
                        theme: theme || 'dark',
                        notifications: notifStr === '1',
                        date: date || new Date().toISOString().split('T')[0]
                    };
                } catch {
                    return { theme: 'dark', notifications: true, date: new Date().toISOString().split('T')[0] };
                }
            }
        },
        stringify: (val) => {
            if (serializationMode === 'json') {
                return JSON.stringify(val);
            } else {
                return `${val.theme}|${val.notifications ? '1' : '0'}|${val.date}`;
            }
        }
    });

    const toggleTheme = () => setConfig({ ...config, theme: config.theme === 'dark' ? 'light' : 'dark' });
    const toggleNotif = () => setConfig({ ...config, notifications: !config.notifications });

    const handleDateChange = (e) => {
        setConfig({ ...config, date: e.target.value });
    };

    return (
        <div className="flex flex-col h-full w-full max-w-7xl mx-auto px-8">
            <BrowserBar relevantParams={['state']} />

            <div className="text-center mb-8">
                <h2 className="text-xl font-bold mb-2 text-accent uppercase tracking-widest">Demo</h2>
                <h1 className="text-4xl font-bold text-white">Complex State</h1>
                <p className="text-muted mt-2">Managed by useURLStateCustom with {serializationMode === 'json' ? 'JSON' : 'Custom'} Serialization</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1 min-h-0">
                {/* Left Column: Controls */}
                <div className="flex flex-col gap-8 overflow-y-auto pr-2">
                    <div className="p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-white/10 space-y-8 shadow-2xl relative">
                        {/* Theme Toggle */}
                        <div className="flex justify-between items-center pt-4">
                            <span className="text-lg font-medium text-white">Theme</span>
                            <button
                                onClick={toggleTheme}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${config.theme === 'dark'
                                    ? 'bg-slate-800 text-white border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]'
                                    : 'bg-slate-200 text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                                    } `}
                            >
                                {config.theme.toUpperCase()}
                            </button>
                        </div>

                        {/* Notifications Toggle */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-white">Notifications</span>
                            <button
                                onClick={toggleNotif}
                                className={`w-14 h-8 rounded-full relative transition-colors duration-300 ${config.notifications ? 'bg-white/50 border border-white/50' : 'bg-white/5 border border-white/10'
                                    } `}
                            >
                                <div className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 shadow-lg ${config.notifications ? 'left-7 bg-white' : 'left-1 bg-slate-400'
                                    } `} />
                            </button>
                        </div>

                        {/* Date Picker */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm text-muted">
                                <span>Selected Date</span>
                                <span className="text-primary font-mono">{config.date}</span>
                            </div>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={config.date}
                                    onChange={handleDateChange}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all [color-scheme:dark]"
                                />
                            </div>
                        </div>
                    </div>


                </div>

                {/* Right Column: Code & Explanation */}
                <div className="flex flex-col gap-6 overflow-y-auto pl-2">
                    <div className="p-6 bg-[#0d1117] rounded-2xl border border-white/10 shadow-2xl relative">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white">Custom Serialization</h3>
                            <div className="flex bg-black/40 rounded-lg p-1 border border-white/10">
                                <button
                                    onClick={() => setSerializationMode('json')}
                                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${serializationMode === 'json' ? 'bg-primary text-black shadow-lg' : 'text-muted hover:text-white'}`}
                                >
                                    JSON
                                </button>
                                <button
                                    onClick={() => setSerializationMode('custom')}
                                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${serializationMode === 'custom' ? 'bg-primary text-black shadow-lg' : 'text-muted hover:text-white'}`}
                                >
                                    CUSTOM
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6 font-mono text-sm">
                            <div>
                                <div className="text-muted mb-2 text-xs">// 0. Import Hook</div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                    <span className="text-purple-400">import</span> {'{'} useURLStateCustom {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@parca/components'</span>;
                                </div>
                            </div>

                            <div>
                                <div className="text-muted mb-2 text-xs">// 1. Define custom parser/serializer</div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                    <span className="text-purple-400">const</span> [config, setConfig] = <span className="text-blue-400">useURLStateCustom</span>(
                                    <br />&nbsp;&nbsp;<span className="text-green-400">'state'</span>,
                                    <br />&nbsp;&nbsp;{'{'}
                                    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">defaultValue</span>: {'{'} ... {'}'},
                                    {serializationMode === 'json' ? (
                                        <>
                                            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">parse</span>: (val) =&gt; <span className="text-yellow-400">JSON</span>.<span className="text-blue-400">parse</span>(val),
                                            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">stringify</span>: (val) =&gt; <span className="text-yellow-400">JSON</span>.<span className="text-blue-400">stringify</span>(val)
                                        </>
                                    ) : (
                                        <>
                                            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">parse</span>: (val) =&gt; {'{'}
                                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> [t, n, d] = val.<span className="text-blue-400">split</span>(<span className="text-green-400">'|'</span>);
                                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> {'{'} theme: t, notifications: n === <span className="text-green-400">'1'</span>, date: d {'}'};
                                            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'},
                                            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">stringify</span>: (val) =&gt; <span className="text-green-400">`$</span>{'{'}val.theme{'}'}<span className="text-green-400">|</span>{'{'}val.notifications ? <span className="text-green-400">'1'</span> : <span className="text-green-400">'0'</span>{'}'}<span className="text-green-400">|</span>{'{'}val.date{'}'}<span className="text-green-400">`</span>
                                        </>
                                    )}
                                    <br />&nbsp;&nbsp;{'}'}
                                    <br />);
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* State Visualization */}
                    <div className="flex flex-col gap-4">
                        <div className="p-6 bg-[#0d1117] rounded-2xl border border-white/10 font-mono text-xs shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-white/20 text-[10px]">URL PARAM</div>
                            <div className="text-muted mb-2 select-none">// Encoded State ({serializationMode === 'json' ? 'JSON' : 'Custom'})</div>
                            <div className="break-all leading-relaxed">
                                <span className="text-accent">?state=</span>
                                <span className="text-primary/80">
                                    {serializationMode === 'json'
                                        ? JSON.stringify(config)
                                        : `${config.theme}|${config.notifications ? '1' : '0'}|${config.date}`
                                    }
                                </span>
                            </div>
                        </div>

                        <div className="p-6 bg-[#0d1117] rounded-2xl border border-white/10 font-mono text-xs shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-white/20 text-[10px]">DECODED JSON</div>
                            <div className="text-muted mb-2 select-none">// Decoded State</div>
                            <pre className="text-green-400/90">
                                {JSON.stringify(config, null, 2)}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ComplexUrlState() {
    const [serializationMode, setSerializationMode] = React.useState('json'); // 'json' | 'custom'

    return (
        <ComplexStateContent
            key={serializationMode}
            serializationMode={serializationMode}
            setSerializationMode={setSerializationMode}
        />
    );
}
