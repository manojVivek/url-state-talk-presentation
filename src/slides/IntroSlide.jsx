import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, MapPin, Link as LinkIcon } from 'lucide-react';

export default function IntroSlide() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full max-w-4xl mx-auto">
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative p-12 bg-[#0d1117]/60 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl w-full overflow-hidden"
            >
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    {/* Profile Image Area */}
                    <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="relative group"
                    >
                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                            <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center overflow-hidden relative">
                                <img src="/profile.jpg" alt="Manoj Vivek" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-surface border border-white/10 p-3 rounded-full shadow-lg">
                            <span className="text-2xl">👋</span>
                        </div>
                    </motion.div>

                    {/* Content Area */}
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-sm font-bold tracking-widest text-accent uppercase mb-2"
                            >
                                About Me
                            </motion.h2>
                            <motion.h1
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-5xl font-bold text-white mb-2"
                            >
                                Manoj Vivek
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-xl text-primary/80 font-medium"
                            >
                                Software Engineer @ Polar Signals
                            </motion.p>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-muted text-lg leading-relaxed max-w-lg"
                        >
                            Creator of <a href="https://responsively.app" className="text-white hover:underline decoration-primary underline-offset-4">Responsively App</a>.
                            Maintainer of <a href="https://parca.dev" className="text-white hover:underline decoration-primary underline-offset-4">Parca</a>.
                            Open source enthusiast with a passion for Web Performance and Startups.
                        </motion.p>

                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.75 }}
                            className="flex flex-wrap gap-2 text-sm"
                        >
                            <span className="text-muted/60">Also into:</span>
                            <span className="px-2 py-1 bg-white/5 rounded-md text-muted border border-white/5">Motorcycles</span>
                            <span className="px-2 py-1 bg-white/5 rounded-md text-muted border border-white/5">Badminton</span>
                            <span className="px-2 py-1 bg-white/5 rounded-md text-muted border border-white/5">Flight Sim</span>
                        </motion.div> */}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col gap-3 pt-4"
                        >
                            <SocialLink href="https://github.com/manojVivek" icon={<Github size={18} />} label="manojVivek" />
                            <SocialLink href="https://twitter.com/vivek_jonam" icon={<Twitter size={18} />} label="@vivek_jonam" />
                            <SocialLink href="https://manojvivek.dev" icon={<LinkIcon size={18} />} label="manojvivek.dev" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 rounded-xl text-muted hover:text-white transition-all hover:translate-x-1 group"
        >
            <span className="text-primary/70 group-hover:text-primary transition-colors">
                {icon}
            </span>
            <span className="text-sm font-medium">
                {label}
            </span>
        </a>
    );
}
