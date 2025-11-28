import React from 'react';
import { motion } from 'framer-motion';
import { useURLState, useURLStateBatch } from '@parca/components';
import { BrowserBar } from '../../components/BrowserBar';

export default function BatchUpdates() {
    // Define 4 separate URL states
    const [name, setName] = useURLState('name', { defaultValue: '' });
    const [email, setEmail] = useURLState('email', { defaultValue: '' });
    const [job, setJob] = useURLState('job', { defaultValue: '' });
    const [company, setCompany] = useURLState('company', { defaultValue: '' });

    const batchUpdates = useURLStateBatch();

    // Local state for the form inputs to allow typing without updating URL immediately if desired,
    // but for this demo, let's update URL on submit to show the batch effect clearly.
    // Actually, if we bind inputs directly to useURLState setters, they update on every keystroke.
    // To demonstrate "Batch Updates", we usually want to set multiple things *at once* (e.g. on button click).
    // So let's use local state for inputs and sync to URL on Submit.

    const [localName, setLocalName] = React.useState(name);
    const [localEmail, setLocalEmail] = React.useState(email);
    const [localJob, setLocalJob] = React.useState(job);
    const [localCompany, setLocalCompany] = React.useState(company);

    // Sync local state when URL changes (e.g. back button)
    React.useEffect(() => {
        setLocalName(name);
        setLocalEmail(email);
        setLocalJob(job);
        setLocalCompany(company);
    }, [name, email, job, company]);

    const handleSubmit = (e) => {
        e.preventDefault();
        batchUpdates(() => {
            setName(localName);
            setEmail(localEmail);
            setJob(localJob);
            setCompany(localCompany);
        });
    };

    return (
        <div className="flex flex-col h-full w-full max-w-7xl mx-auto px-8">
            <BrowserBar relevantParams={['name', 'email', 'job', 'company']} />

            <div className="text-center mb-8">
                <h2 className="text-xl font-bold mb-2 text-accent uppercase tracking-widest">Demo</h2>
                <h1 className="text-4xl font-bold text-white">Batch Updates</h1>
                <p className="text-muted mt-2">Update multiple URL parameters simultaneously</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1 min-h-0">
                {/* Left Column: Form */}
                <div className="flex flex-col gap-8 overflow-y-auto pr-2">
                    <motion.div
                        className="p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"
                        whileHover={{ scale: 1, borderColor: 'rgba(34,211,238,0.3)' }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Full Name</label>
                                <input
                                    type="text"
                                    value={localName}
                                    onChange={(e) => setLocalName(e.target.value)}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Email Address</label>
                                <input
                                    type="email"
                                    value={localEmail}
                                    onChange={(e) => setLocalEmail(e.target.value)}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Job Title</label>
                                    <input
                                        type="text"
                                        value={localJob}
                                        onChange={(e) => setLocalJob(e.target.value)}
                                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        placeholder="Engineer"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Company</label>
                                    <input
                                        type="text"
                                        value={localCompany}
                                        onChange={(e) => setLocalCompany(e.target.value)}
                                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        placeholder="Acme Inc"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black/30 text-white font-bold py-4 rounded-xl border border-white/10 hover:bg-black/60 hover:border-white/20 transition-all transform active:scale-95 shadow-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Right Column: Code & Explanation */}
                <div className="flex flex-col gap-6 overflow-y-auto pl-2">
                    <div className="p-6 bg-[#0d1117] rounded-2xl border border-white/10 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white">Code Usage</h3>
                            <span className="text-xs font-mono text-muted">BatchUpdates.jsx</span>
                        </div>

                        <div className="space-y-6 font-mono text-sm">
                            <div>
                                <div className="text-muted mb-2 text-xs">// 0. Import Hook</div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                    <span className="text-purple-400">import</span> {'{'} useURLState, useURLStateBatch {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@parca/components'</span>;
                                </div>
                            </div>

                            <div>
                                <div className="text-muted mb-2 text-xs">// 1. Define multiple states</div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                    <span className="text-purple-400">const</span> [name, setName] = <span className="text-blue-400">useURLState</span>(<span className="text-green-400">'name'</span>);
                                    <br /><span className="text-purple-400">const</span> [email, setEmail] = <span className="text-blue-400">useURLState</span>(<span className="text-green-400">'email'</span>);
                                    <br /><span className="text-purple-400">const</span> [job, setJob] = <span className="text-blue-400">useURLState</span>(<span className="text-green-400">'job'</span>);
                                    <br /><span className="text-purple-400">const</span> [company, setCompany] = <span className="text-blue-400">useURLState</span>(<span className="text-green-400">'company'</span>);
                                    <br />
                                    <br /><span className="text-purple-400">const</span> batchUpdates = <span className="text-blue-400">useURLStateBatch</span>();
                                </div>
                            </div>

                            <div>
                                <div className="text-muted mb-2 text-xs">// 2. Update all at once</div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                    <span className="text-purple-400">const</span> <span className="text-yellow-400">handleSubmit</span> = () =&gt; {'{'}
                                    <br />&nbsp;&nbsp;<span className="text-muted">// Only one URL update happens</span>
                                    <br />&nbsp;&nbsp;<span className="text-blue-400">batchUpdates</span>(() =&gt; {'{'}
                                    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">setName</span>(localName);
                                    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">setEmail</span>(localEmail);
                                    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">setJob</span>(localJob);
                                    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">setCompany</span>(localCompany);
                                    <br />&nbsp;&nbsp;{'}'});
                                    <br />{'}'};
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
