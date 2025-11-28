import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Globe, Code, Server, PackageCheck, Sliders } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all group"
    >
        <div className="flex items-center gap-4 mb-3">
            <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg text-primary group-hover:scale-110 transition-transform">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-muted text-sm leading-relaxed">
            {description}
        </p>
    </motion.div>
);

export default function FeaturesSlide() {
    const features = [
        {
            icon: Code,
            title: "Familiar API",
            description: "Designed to look and feel exactly like React's `useState`. Drop-in replacement for local state.",
            delay: 0.4
        },
        {
            icon: Globe,
            title: "Router Agnostic",
            description: "Doesn't depend on any router. Works with any router through the `navigateTo` function as a parameter.",
            delay: 0.3
        },
        {
            icon: FileCode,
            title: "TypeScript Support",
            description: "First-class type definitions included. No more guessing what your state looks like.",
            delay: 0.2
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Batteries Included
                </h2>
                <p className="text-xl text-muted">
                    Everything you need for production-grade URL state management.
                </p>
            </motion.div>

            <div className="flex flex-col gap-6 w-full">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
}
