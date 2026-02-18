"use client";

import { SlideLayout } from "./SlideLayout";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizCardProps {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export function QuizCard({ question, options, correctIndex, explanation }: QuizCardProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [answered, setAnswered] = useState(false);

    const handleSelect = (index: number) => {
        if (answered) return;
        setSelectedIndex(index);
        setAnswered(true);
    };

    return (
        <SlideLayout>
            <div className="flex flex-col items-center max-w-4xl mx-auto w-full">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">{question}</h2>

                <div className="grid grid-cols-1 gap-4 w-full">
                    {options.map((option, index) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleSelect(index)}
                            className={cn(
                                "p-6 rounded-xl border-2 text-left text-xl md:text-2xl transition-all duration-300 flex items-center justify-between",
                                answered && index === correctIndex
                                    ? "bg-green-500/20 border-green-500"
                                    : answered && index === selectedIndex && index !== correctIndex
                                        ? "bg-red-500/20 border-red-500"
                                        : selectedIndex === index
                                            ? "border-primary bg-primary/10"
                                            : "border-border bg-card hover:border-primary/50"
                            )}
                        >
                            <span>{option}</span>
                            {answered && index === correctIndex && <CheckCircle2 className="text-green-500 w-8 h-8" />}
                            {answered && index === selectedIndex && index !== correctIndex && <XCircle className="text-red-500 w-8 h-8" />}
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence>
                    {answered && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-12 bg-muted/50 p-8 rounded-2xl border border-border w-full text-center"
                        >
                            <h3 className="text-2xl font-bold mb-2">
                                {selectedIndex === correctIndex ? <span className="text-green-500">Correct!</span> : <span className="text-red-500">Incorrect.</span>}
                            </h3>
                            <p className="text-xl text-muted-foreground">{explanation}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </SlideLayout>
    );
}
