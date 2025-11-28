import { useCallback } from 'react';
import { useURLState } from '@parca/components';

export function useSlideNavigation(totalSlides) {
    const [slideStr, setSlide] = useURLState('slide', { defaultValue: '0' });

    // Parse slide index safely
    const currentSlide = parseInt(slideStr, 10);
    const safeSlide = isNaN(currentSlide) ? 0 : Math.max(0, Math.min(currentSlide, totalSlides - 1));

    const goToSlide = useCallback((index) => {
        if (index >= 0 && index < totalSlides) {
            setSlide(index.toString());
        }
    }, [totalSlides, setSlide]);

    const nextSlide = useCallback(() => {
        if (safeSlide < totalSlides - 1) {
            setSlide((safeSlide + 1).toString());
        }
    }, [safeSlide, totalSlides, setSlide]);

    const prevSlide = useCallback(() => {
        if (safeSlide > 0) {
            setSlide((safeSlide - 1).toString());
        }
    }, [safeSlide, setSlide]);

    return {
        currentSlide: safeSlide,
        goToSlide,
        nextSlide,
        prevSlide
    };
}
