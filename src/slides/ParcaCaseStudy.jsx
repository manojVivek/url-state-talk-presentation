import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GitCommit } from 'lucide-react';

export default function ParcaCaseStudy() {
    return (
        <div className="max-w-6xl w-full flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-bold mb-4 text-white">Parca's URL State Journey</h2>
                <p className="text-xl text-muted max-w-2xl mx-auto">
                    Evolved from a simple hook to a sophisticated state management system.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-stretch gap-8 w-full relative">
                {/* Connecting Line (Desktop) */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 hidden md:block" />

                {/* Stage 1 */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex-1 relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-8 bg-surface backdrop-blur-xl rounded-2xl border border-white/10 h-full flex flex-col hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-white/10 rounded-lg text-accent">
                                <GitCommit size={24} />
                            </div>
                            <span className="text-accent font-mono text-sm tracking-wider uppercase">Stage 1</span>
                        </div>

                        <h3 className="text-3xl font-bold mb-4 text-white">Simple Hook</h3>
                        <div className="bg-black/50 rounded-lg p-4 mb-6 border border-white/5 overflow-x-auto">
                            <pre className="text-sm font-mono text-muted">
                                <span className="text-secondary">const</span> [value, setValue] = <span className="text-primary">useURLState</span>(<span className="text-accent">'value'</span>);
                            </pre>
                        </div>
                        <p className="text-muted leading-relaxed">
                            Started with a basic hook for simple string syncing. Good for simple states, but limited for complex apps.
                        </p>
                    </div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="relative z-10 flex items-center justify-center"
                >
                    <div className="w-12 h-12 bg-background rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <ArrowRight className="text-white" size={20} />
                    </div>
                </motion.div>

                {/* Stage 2 */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex-1 relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="relative p-8 bg-surface backdrop-blur-xl rounded-2xl border border-primary/30 h-full flex flex-col shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                <GitCommit size={24} />
                            </div>
                            <span className="text-primary font-mono text-sm tracking-wider uppercase">The System</span>
                        </div>

                        <h3 className="text-3xl font-bold mb-4 text-white">Evolved System</h3>
                        <div className="bg-black/50 rounded-lg p-4 mb-6 border border-primary/20 overflow-x-auto">
                            <pre className="text-xs font-mono text-muted space-y-2">
                                <div className="text-primary mb-2">
                                    {'<URLStateProvider>'}
                                </div>
                                <div className="pl-4 text-accent">
                                    <div>{'// ChildComponent'}</div>
                                    <div>{'() => {'}</div>
                                    <div className="pl-4">
                                        <div>
                                            <span className="text-secondary">const</span> [val1, setVal1] = <span className="text-primary">useURLState</span>(<span className="text-accent">'key1'</span>);
                                            <br />
                                            <span className="text-secondary">const</span> [val2, setVal2] = <span className="text-primary">useURLState</span>(<span className="text-accent">'key2'</span>);
                                        </div>
                                        <div className="mt-2">
                                            <div><span className="text-secondary">const</span>{' updateBoth = () => {'}</div>
                                            <div className="pl-4">
                                                <span className="text-primary">batchUpdates</span>(() =&gt; {'{'}

                                                <div className="pl-4">
                                                    <span className="text-primary">setVal1</span>(<span className="text-accent">'a'</span>);
                                                    <br />
                                                    <span className="text-primary">setVal2</span>(<span className="text-accent">'b'</span>);
                                                </div>

                                                <div>{'}'});</div>
                                            </div>
                                            <div>{'}'};</div>
                                        </div>
                                    </div>
                                    <div>{'}'};</div>

                                </div>
                                <div className="text-primary mb-4">
                                    {'</URLStateProvider>'}
                                </div>
                            </pre>
                        </div>
                        <p className="text-muted leading-relaxed">
                            A robust system handling complex state, batching updates to prevent history flooding, and custom serialization.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
