import React from 'react';
import { motion } from 'framer-motion';
import { Share2, RefreshCw, Search } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay, duration: 0.6 }}
        className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all group"
    >
        <div className="p-4 bg-gradient-to-br from-white/10 to-transparent rounded-2xl mb-6 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-300 shadow-inner border border-white/5">
            <Icon size={40} />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted text-center text-base leading-relaxed">{description}</p>
    </motion.div>
);

export default function ProblemStatement() {
    return (
        <div className="max-w-6xl w-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    Why URL State?
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={Share2}
                    title="Shareability"
                    description="The most fundamental observability feature. If a user can't copy the URL and send it to a colleague to show them exactly what they see, then it is not very useful in debugging issues."
                    delay={0.2}
                />
                <FeatureCard
                    icon={RefreshCw}
                    title="The Refresh Trap"
                    description="Users lose all state on a simple page reload. Memory state is ephemeral; URL state is persistent."
                    delay={0.4}
                />
                <FeatureCard
                    icon={Search}
                    title="The SEO Black Hole"
                    description="Search engines doesn't index the sections of the page that are state dependent."
                    delay={0.6}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 p-10 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-white/10 rounded-3xl text-center backdrop-blur-md relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

                <p className="relative z-10 text-4xl md:text-5xl text-white font-bold tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">URL</span> as the <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Source of Truth</span>
                </p>
            </motion.div>
        </div>
    );
}
