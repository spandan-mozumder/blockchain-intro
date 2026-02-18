"use client";

import { SlideLayout } from "./SlideLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MythCardProps {
    mythNumber: number;
    title: string;
    statement: string;
    verdict: "FACT" | "CAP" | "OUTDATED";
    realityPoints: string[];
    analogy?: string;
}

export function MythCard({ mythNumber, title, statement, verdict, realityPoints, analogy }: MythCardProps) {
    const [revealed, setRevealed] = useState(false);

    const getVerdictColor = () => {
        switch (verdict) {
            case "FACT": return "text-green-500 border-green-500 bg-green-500/10";
            case "CAP": return "text-red-500 border-red-500 bg-red-500/10";
            case "OUTDATED": return "text-yellow-500 border-yellow-500 bg-yellow-500/10";
            default: return "";
        }
    };

    const getVerdictIcon = () => {
        switch (verdict) {
            case "FACT": return <CheckCircle2 className="w-16 h-16 mr-4" />;
            case "CAP": return <XCircle className="w-16 h-16 mr-4" />;
            case "OUTDATED": return <AlertCircle className="w-16 h-16 mr-4" />;
            default: return null;
        }
    };

    return (
        <SlideLayout>
            <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
                <h2 className="text-2xl font-mono text-muted-foreground mb-8 text-left w-full">Myth #{mythNumber}: {title}</h2>

                <div className="w-full bg-card border border-border rounded-3xl p-12 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                    {/* Statement */}
                    <motion.div
                        layout
                        className="text-center mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">"{statement}"</h1>
                    </motion.div>

                    {/* Reveal Button */}
                    {!revealed && (
                        <motion.div layout className="flex justify-center mt-8">
                            <Button
                                size="lg"
                                className="text-2xl px-12 py-8 rounded-full font-bold"
                                onClick={() => setRevealed(true)}
                            >
                                REVEAL ANSWER
                            </Button>
                        </motion.div>
                    )}

                    {/* Answer Reveal */}
                    <AnimatePresence>
                        {revealed && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 border-t border-border pt-8"
                            >
                                <div className={`flex items-center justify-center p-6 border-4 rounded-xl mb-8 w-fit mx-auto ${getVerdictColor()}`}>
                                    {getVerdictIcon()}
                                    <span className="text-5xl font-black">{verdict}</span>
                                </div>

                                <ul className="space-y-4 text-left max-w-3xl mx-auto">
                                    {realityPoints.map((point, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="text-xl md:text-2xl flex items-start"
                                        >
                                            <span className="mr-3 mt-1 text-primary">•</span>
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>

                                {analogy && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="mt-8 bg-muted/50 p-6 rounded-lg italic text-lg md:text-xl text-center"
                                    >
                                        💡 {analogy}
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </SlideLayout>
    );
}
