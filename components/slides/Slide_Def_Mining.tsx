"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Pickaxe } from "lucide-react";

export function Slide_Def_Mining() {
    return (
        <SlideLayout title="What is Mining?">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center max-w-4xl"
            >
                <div className="bg-orange-500/10 p-8 rounded-full mb-8">
                    <Pickaxe className="w-24 h-24 text-orange-500" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    "Computers Solving Math Puzzles."
                </h2>

                <div className="text-xl md:text-2xl text-muted-foreground text-left max-w-3xl leading-relaxed space-y-4">
                    <p>
                        Mining is <span className="text-orange-500 font-bold">NOT</span> digging for digital gold with a pickaxe.
                    </p>
                    <p>
                        It is simply thousands of computers competing to solve a very difficult cryptographic puzzle (guessing the right Hash).
                    </p>
                    <p>
                        The winner gets to add the next <span className="font-bold text-white">Block</span> of transactions to the chain, and gets rewarded with freshly created Bitcoin for their hard work.
                    </p>
                </div>
            </motion.div>
        </SlideLayout>
    );
}
