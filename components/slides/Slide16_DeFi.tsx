"use client";

import { SlideLayout } from "./SlideLayout";
import { Landmark, Smartphone, ArrowRight, Coins } from "lucide-react";
import { motion } from "framer-motion";

export function Slide16_DeFi() {
    return (
        <SlideLayout title="DeFi (Decentralized Finance)">
            <div className="flex flex-col items-center w-full mt-8">

                <div className="flex items-center justify-center gap-4 md:gap-20 w-full mb-12">

                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <Landmark className="w-32 h-32 text-muted-foreground" />
                            <svg className="absolute inset-0 w-full h-full text-red-500 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                        <p className="mt-4 text-xl font-bold text-muted-foreground">The Bank</p>
                        <p className="text-sm text-red-400">Takes 5% Fee</p>
                    </div>

                    <ArrowRight className="w-16 h-16 text-muted-foreground/30" />

                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 bg-primary/20 rounded-3xl flex items-center justify-center border-4 border-primary">
                            <Smartphone className="w-16 h-16 text-primary" />
                        </div>
                        <p className="mt-4 text-xl font-bold text-primary">Code (Smart Contract)</p>
                        <p className="text-sm text-green-400">Takes 0.3% Fee</p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-card p-8 rounded-xl border border-border max-w-3xl flex items-center gap-6"
                >
                    <Coins className="w-16 h-16 text-yellow-500" />
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Be The Bank</h3>
                        <p className="text-lg text-muted-foreground">
                            "DeFi is just banking software without the bank. You lend money directly to the software, and the software pays YOU the interest. No manager takes a cut."
                        </p>
                    </div>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
