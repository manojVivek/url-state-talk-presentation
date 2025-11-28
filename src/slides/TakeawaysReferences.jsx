import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Package, AppWindow, Twitter } from 'lucide-react';

const ProjectCard = ({ icon: Icon, title, description, url, displayUrl, delay }) => (
    <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-center gap-6 p-4 bg-surface/50 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all group w-full"
    >
        <div className="p-3 bg-white/5 rounded-lg text-white group-hover:text-primary group-hover:scale-110 transition-all shrink-0">
            <Icon size={24} />
        </div>
        <div className="flex-1 min-w-0 text-left">
            <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    {title}
                </h3>
                <span className="text-xs font-mono text-muted/60 group-hover:text-primary/70 transition-colors hidden sm:block">
                    {displayUrl}
                </span>
            </div>
            <p className="text-muted text-sm truncate">
                {description}
            </p>
        </div>
    </motion.a>
);

export default function TakeawaysReferences() {
    return (
        <div className="max-w-4xl w-full flex flex-col items-center justify-center h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center mb-12"
            >
                <h2 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                    Thank You!
                </h2>
                <p className="text-2xl text-muted">
                    Check out these open source projects
                </p>
            </motion.div>

            <div className="flex flex-col gap-4 w-full max-w-2xl">
                <ProjectCard
                    icon={Github}
                    title="Parca"
                    description="Open Source Continuous Profiling platform."
                    url="https://github.com/parca-dev/parca"
                    displayUrl="github.com/parca-dev/parca"
                    delay={0.2}
                />
                <ProjectCard
                    icon={Package}
                    title="@parca/components"
                    description="The UI component library containing the useURLState hook."
                    url="https://www.npmjs.com/package/@parca/components"
                    displayUrl=""
                    delay={0.3}
                />
                <ProjectCard
                    icon={AppWindow}
                    title="Responsively"
                    description="Open source dev-tool to assist responsive web development."
                    url="https://responsively.app/"
                    displayUrl="responsively.app"
                    delay={0.4}
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 flex gap-8 text-muted/50"
            >
                <a href="https://twitter.com/vivek_jonam" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Twitter size={18} />
                    @vivek_jonam
                </a>
                <span>•</span>
                <a href="https://github.com/manojvivek" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Github size={18} />
                    github.com/manojvivek
                </a>
            </motion.div>
        </div>
    );
}
