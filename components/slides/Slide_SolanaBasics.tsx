"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Slide_SolanaBasics() {
    return (
        <SlideLayout title="Solana: The Speed Layer">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-8 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex justify-center"
                >
                    <div className="w-64 h-64 bg-gradient-to-tr from-[#9945FF] to-[#14F195] rounded-full flex items-center justify-center shadow-2xl shadow-[#9945FF]/50">
                        <Zap className="w-32 h-32 text-white fill-white" />
                    </div>
                </motion.div>
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card p-6 rounded-xl border border-[#14F195]/30"
                    >
                        <h3 className="text-2xl font-bold text-[#14F195] mb-2">High Speed & Low Fees</h3>
                        <p className="text-lg">Thousands of transactions per second. Fractions of a penny.</p>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground text-sm">
                            <li>Fast like Visa/Mastercard (65,000 TPS).</li>
                            <li>Cheap enough for games and micropayments.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-card p-6 rounded-xl border border-[#9945FF]/30"
                    >
                        <h3 className="text-2xl font-bold text-[#9945FF] mb-2">Proof of History</h3>
                        <p className="text-lg">A cryptographic clock that keeps everyone in sync without talking constantly.</p>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground text-sm">
                            <li>Parallel processing (multi-threaded).</li>
                            <li>Like a synchronized dance instead of a meeting.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
}
