import React from 'react';
import { motion } from 'framer-motion';
import { useURLState } from '@parca/components';
import { BrowserBar } from '../../components/BrowserBar';

export default function BasicUrlState() {
    const [countStr, setCount] = useURLState('demo_count', { defaultValue: '0' });
    const [filter, setFilter] = useURLState('demo_filter', { defaultValue: '' });

    const count = parseInt(countStr, 10) || 0;

    return (
        <div className="flex flex-col h-full w-full max-w-7xl mx-auto px-8">
            <BrowserBar relevantParams={['demo_count', 'demo_filter']} />

            <div className="text-center mb-8">
                <h2 className="text-xl font-bold mb-2 text-accent uppercase tracking-widest">Demo</h2>
                <h1 className="text-4xl font-bold text-white">Basic State</h1>
                <p className="text-muted mt-2">Managed by @parca/components useURLState</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1 min-h-0">
                {/* Left Column: Demos */}
                <div className="flex flex-col gap-8 overflow-y-auto pr-2">
                    {/* Counter Demo */}
                    <motion.div
                        className="p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-white/10 flex flex-col items-center shadow-2xl"
                        whileHover={{ scale: 1, borderColor: 'rgba(34,211,238,0.3)' }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-white">Counter</h3>
                        <div className="flex items-center gap-8">
                            <button
                                onClick={() => setCount((count - 1).toString())}
                                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:text-primary flex items-center justify-center text-2xl transition-all active:scale-90"
                            >
                                -
                            </button>
                            <span className="text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tabular-nums">
                                {count}
                            </span>
                            <button
                                onClick={() => setCount((count + 1).toString())}
                                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:text-primary flex items-center justify-center text-2xl transition-all active:scale-90"
                            >
                                +
                            </button>
                        </div>
                        <div className="mt-8 px-4 py-2 bg-black/40 rounded-lg border border-white/5 font-mono text-sm text-primary">
                            ?demo_count={count}
                        </div>
                    </motion.div>

                    {/* Filter Demo */}
                    <motion.div
                        className="p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-white/10 flex flex-col items-center shadow-2xl"
                        whileHover={{ scale: 1, borderColor: 'rgba(34,211,238,0.3)' }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-white">Filter</h3>
                        <div className="w-full relative group">
                            <input
                                type="text"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                placeholder="Type something..."
                                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20 text-white"
                            />
                            <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
                        </div>
                        <div className="mt-8 px-4 py-2 bg-black/40 rounded-lg border border-white/5 font-mono text-sm text-secondary break-all max-w-full">
                            ?demo_filter={filter || '...'}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Code & Explanation */}
                <div className="flex flex-col gap-6 overflow-y-auto pl-2">
                    <div className="p-6 bg-[#0d1117] rounded-2xl border border-white/10 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white">Code Usage</h3>
                            <span className="text-xs font-mono text-muted">BasicUrlState.jsx</span>
                        </div>

                        <div className="space-y-6 font-mono text-sm">
                            <div>
                                <div className="text-muted mb-2 text-xs">// 1. Import the hook</div>
                                <div className="text-purple-400">import <span className="text-white">{'{'} useURLState {'}'}</span> from <span className="text-green-400">'@parca/components'</span>;</div>
                            </div>

                            <div>
                                <div className="text-muted mb-2 text-xs">// 2. Initialize state with URL binding</div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                    <span className="text-purple-400">const</span> [countStr, setCount] = <span className="text-blue-400">useURLState</span>(
                                    <br />&nbsp;&nbsp;<span className="text-green-400">'demo_count'</span>,
                                    <br />&nbsp;&nbsp;{'{'} <span className="text-orange-400">defaultValue</span>: <span className="text-green-400">'0'</span> {'}'}
                                    <br />);
                                </div>
                            </div>

                            <div>
                                <div className="text-muted mb-2 text-xs">// 3. Use like standard useState</div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                    <span className="text-purple-400">const</span> [filter, setFilter] = <span className="text-blue-400">useURLState</span>(
                                    <br />&nbsp;&nbsp;<span className="text-green-400">'demo_filter'</span>,
                                    <br />&nbsp;&nbsp;{'{'} <span className="text-orange-400">defaultValue</span>: <span className="text-green-400">''</span> {'}'}
                                    <br />);
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
