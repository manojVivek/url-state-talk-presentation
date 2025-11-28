import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

export default function TitleSlide() {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-12 relative z-10">
            <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                className="p-8 bg-white/5 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.2)] border border-white/10 ring-1 ring-white/20"
            >
                <Link size={80} className="text-primary drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
            </motion.div>

            <div className="space-y-6">
                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-7xl md:text-8xl font-bold tracking-tight"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                        Your App's URL
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                        is a State Library
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl text-muted font-light max-w-3xl mx-auto leading-relaxed"
                >
                    Mastering URL-based state for <span className="text-white font-medium">shareable</span>, <span className="text-white font-medium">observable</span>, and <span className="text-white font-medium">robust</span> web applications.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-[-100px] text-sm text-white/30 font-mono tracking-widest uppercase"
            >
                Press Space to Start
            </motion.div>
        </div>
    );
}
