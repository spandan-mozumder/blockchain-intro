"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Battery, Zap, Trophy, Dices } from "lucide-react";

export function Slide_Consensus() {
    return (
        <SlideLayout title="How We Agree: Consensus">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-8">

                {/* Proof of Work */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card/30 border border-border p-8 rounded-3xl flex flex-col items-center"
                >
                    <div className="w-24 h-24 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                        <Battery className="w-12 h-12 text-orange-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Proof of Work</h2>
                    <p className="text-xl font-mono text-primary mb-4">The Math Race</p>
                    <ul className="text-left space-y-4 text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <Trophy className="w-5 h-5 text-yellow-500" />
                            <span>Miners race to solve a puzzle.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-red-500" />
                            <span>High Energy Cost (Security Feature).</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Proof of Stake */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card border-2 border-primary/50 p-8 rounded-3xl flex flex-col items-center shadow-lg shadow-primary/10"
                >
                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <Dices className="w-12 h-12 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Proof of Stake</h2>
                    <p className="text-xl font-mono text-primary mb-4">The Lottery</p>
                    <ul className="text-left space-y-4 text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <Trophy className="w-5 h-5 text-yellow-500" />
                            <span>Validators chosen by deposit size.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-green-500" />
                            <span>Energy Efficient (Eco-friendly).</span>
                        </li>
                    </ul>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
