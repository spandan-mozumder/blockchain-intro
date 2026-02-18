"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Users, Landmark, Vote } from "lucide-react";

export function Slide_DAO() {
    return (
        <SlideLayout title="DAO: A Community with a Bank Account">
            <div className="flex flex-col items-center w-full mt-8">

                <div className="relative w-full max-w-4xl">
                    {/* The Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 0.5, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-0 left-0 p-6 rounded-2xl border border-border bg-card/30 scale-75 grayscale"
                    >
                        <Landmark className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-bold">The Company</h3>
                        <p>CEO decides everything.</p>
                    </motion.div>

                    {/* The DAO Way */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-card w-full p-12 rounded-[3rem] border-2 border-primary shadow-2xl shadow-primary/20 flex flex-col items-center z-10 relative"
                    >
                        <div className="flex -space-x-4 mb-8">
                            <div className="w-16 h-16 rounded-full bg-blue-500 border-4 border-background flex items-center justify-center"><Users className="text-white" /></div>
                            <div className="w-16 h-16 rounded-full bg-purple-500 border-4 border-background flex items-center justify-center"><Users className="text-white" /></div>
                            <div className="w-16 h-16 rounded-full bg-pink-500 border-4 border-background flex items-center justify-center"><Users className="text-white" /></div>
                        </div>

                        <h2 className="text-4xl font-bold mb-4">No CEO. Just Code.</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            "Imagine a Discord group that manages $1 Billion. We vote on every decision with tokens."
                        </p>

                        <div className="flex gap-4">
                            <div className="bg-primary/10 px-6 py-3 rounded-full flex items-center gap-2 border border-primary/20">
                                <Vote className="w-5 h-5 text-primary" />
                                <span className="font-bold text-primary">Proposal #102: Fund Hackathon</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </SlideLayout>
    );
}
