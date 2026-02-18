"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Fingerprint, ArrowRight } from "lucide-react";

export function Slide_Hashing() {
    return (
        <SlideLayout title="Hashing: The Digital Fingerprint">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl mt-8">

                {/* Input */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-4 w-1/3"
                >
                    <div className="bg-card p-4 rounded-xl border border-border">
                        <p className="font-mono text-sm text-muted-foreground">Input Data</p>
                        <p className="text-lg font-bold">"Hello World"</p>
                    </div>
                    <div className="bg-card p-4 rounded-xl border border-border">
                        <p className="font-mono text-sm text-muted-foreground">Input Data (Changed)</p>
                        <p className="text-lg font-bold">"Hello Worl<span className="text-red-500">d!</span>"</p>
                    </div>
                </motion.div>

                {/* Function */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center gap-2"
                >
                    <div className="bg-primary/20 p-4 rounded-full">
                        <Fingerprint className="w-12 h-12 text-primary" />
                    </div>
                    <ArrowRight className="w-8 h-8 text-muted-foreground" />
                    <p className="font-mono text-xs">SHA-256</p>
                </motion.div>

                {/* Output */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col gap-4 w-1/2"
                >
                    <div className="bg-black/50 p-4 rounded-xl border border-green-500/30 font-mono text-xs break-all text-green-400">
                        a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
                    </div>
                    <div className="bg-black/50 p-4 rounded-xl border border-red-500/30 font-mono text-xs break-all text-red-400">
                        7f83b1657ff1... (COMPLETELY DIFFERENT)
                    </div>
                </motion.div>

            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 text-xl text-center max-w-2xl text-muted-foreground"
            >
                If you change even one comma in the history book, the fingerprint changes completely.
                This alerts everyone that someone messed with the data.
            </motion.p>
        </SlideLayout>
    );
}
