"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Users, Handshake } from "lucide-react";

export function Slide_ConsensusMech() {
    return (
        <SlideLayout title="Consensus: The Agreement">
            <div className="flex flex-col items-center justify-center h-full gap-8 max-w-4xl">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-card p-8 rounded-3xl border border-primary/20 w-full text-center"
                >
                    <div className="flex justify-center mb-6">
                        <Users className="w-20 h-20 text-indigo-400" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">How do we agree without a boss?</h3>
                    <p className="text-xl text-muted-foreground">
                        Imagine 100 people trying to order pizza. Everyone must agree on the toppings.
                        If 51% say "Pepperoni", then we get Pepperoni.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-card/50 p-6 rounded-2xl border border-border"
                    >
                        <h4 className="text-xl font-bold text-orange-500 mb-2">Proof of Work (Mining)</h4>
                        <p className="mb-2">Solve a hard math problem to prove you worked for the vote.</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                            <li>Used by Bitcoin.</li>
                            <li>High energy cost (feature, not bug).</li>
                            <li>Very secure but slow.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-card/50 p-6 rounded-2xl border border-border"
                    >
                        <h4 className="text-xl font-bold text-green-500 mb-2">Proof of Stake (Staking)</h4>
                        <p className="mb-2">Lock up your coins (collateral) to prove you won't cheat.</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                            <li>Used by Ethereum & Solana.</li>
                            <li>Energy efficient (Green).</li>
                            <li>Faster and scalable.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
}
