"use client";

import { useState, useEffect, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";

interface DeckProps {
    slides: ReactNode[];
}

export function Deck({ slides }: DeckProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === "Space") {
                // Prevent default scrolling for spacebar if needed, but usually fine
                if (e.key === "Space") e.preventDefault();
                nextSlide();
            }
            if (e.key === "ArrowLeft") prevSlide();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide]);

    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden font-sans">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-primary to-purple-600 z-50 transition-all duration-300" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />

            <AnimatePresence mode="wait">
                <div key={currentSlide} className="w-full h-full absolute inset-0">
                    {slides[currentSlide]}
                </div>
            </AnimatePresence>

            <div className="fixed bottom-6 right-6 flex gap-2 z-50">
                <Button variant="outline" size="icon" onClick={prevSlide} disabled={currentSlide === 0} className="rounded-full bg-background/50 backdrop-blur border-primary/20 hover:bg-primary/20">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex items-center justify-center px-4 font-mono text-sm bg-background/50 backdrop-blur border border-primary/20 rounded-full min-w-[3rem]">
                    {currentSlide + 1} / {slides.length}
                </div>
                <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="rounded-full bg-background/50 backdrop-blur border-primary/20 hover:bg-primary/20">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
