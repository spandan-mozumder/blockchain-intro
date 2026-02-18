"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function Slide3_FactOrCap() {
    return (
        <SlideLayout className="bg-gradient-to-b from-background to-background/80">
            <div className="flex flex-col items-center justify-center h-full gap-12">
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-white to-red-500"
                >
                    FACT or CAP?
                </motion.h1>

                <div className="flex gap-20 items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-40 h-40 rounded-full bg-green-500/20 border-4 border-green-500 flex items-center justify-center">
                            <Check className="w-24 h-24 text-green-500" />
                        </div>
                        <p className="mt-4 text-3xl font-bold text-green-500">FACT</p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-4xl font-bold text-muted-foreground"
                    >
                        VS
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-40 h-40 rounded-full bg-red-500/20 border-4 border-red-500 flex items-center justify-center">
                            <X className="w-24 h-24 text-red-500" />
                        </div>
                        <p className="mt-4 text-3xl font-bold text-red-500">CAP</p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-xl text-muted-foreground mt-8"
                >
                    (I say a statement. You yell "FACT" or "CAP".)
                </motion.p>
            </div>
        </SlideLayout>
    );
}
