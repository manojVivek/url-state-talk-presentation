import React, { useCallback, useEffect, useState, useRef } from 'react';

export default function DualRangeSlider({ min, max, value, onChange }) {
    const [minVal, maxVal] = value;
    const minValRef = useRef(minVal);
    const maxValRef = useRef(maxVal);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        minValRef.current = minVal;
        maxValRef.current = maxVal;
    }, [minVal, maxVal]);

    return (
        <div className="relative w-full h-12 flex items-center">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    onChange([value, maxVal]);
                }}
                className="thumb thumb--left pointer-events-none absolute h-0 w-full outline-none z-[3] top-1/2 -translate-y-1/2"
                style={{ zIndex: minVal > max - 10 && "5" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    onChange([minVal, value]);
                }}
                className="thumb thumb--right pointer-events-none absolute h-0 w-full outline-none z-[4] top-1/2 -translate-y-1/2"
            />

            <div className="relative w-full">
                <div className="absolute w-full h-2 bg-white/10 rounded-lg z-[1]" />
                <div
                    ref={range}
                    className="absolute h-2 bg-primary rounded-lg z-[2]"
                />
            </div>

            <style>{`
        .thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
          pointer-events: all;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background-color: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
          margin-top: 1px;
        }
        .thumb::-moz-range-thumb {
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
          pointer-events: all;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background-color: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
      `}</style>
        </div>
    );
}
