import React, { useEffect } from 'react';
import { useSlideNavigation } from '../hooks/useSlideNavigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Presentation({ slides }) {
    const { currentSlide, nextSlide, prevSlide } = useSlideNavigation(slides.length);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const CurrentSlideComponent = slides[currentSlide];

    return (
        <div className="w-full h-screen bg-background text-text overflow-hidden relative selection:bg-primary/30">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
                <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-accent/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* Main Content Container */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full flex items-center justify-center p-8 relative z-10"
                >
                    <CurrentSlideComponent />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl z-50">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="p-2 hover:bg-white/10 rounded-full disabled:opacity-30 transition-all hover:scale-110 active:scale-95"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                    {slides.map((_, idx) => (
                        <motion.div
                            key={idx}
                            layout
                            initial={false}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                            }}
                            className={`h-1.5 rounded-full ${idx === currentSlide ? 'w-8 bg-gradient-to-r from-primary to-secondary' : 'w-1.5 bg-white/20'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="p-2 hover:bg-white/10 rounded-full disabled:opacity-30 transition-all hover:scale-110 active:scale-95"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Progress Indicator (Top) */}
            <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500 ease-out z-50"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
        </div>
    );
}
