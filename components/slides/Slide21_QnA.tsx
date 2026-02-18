"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";

export function Slide21_QnA() {
    return (
        <SlideLayout>
            <div className="text-center space-y-8">
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-400"
                >
                    Q & A
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto"
                >
                    Ask Me Anything.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-lg text-muted-foreground/50 italic mt-8"
                >
                    (Even about the price of Bitcoin... actually, no, don't ask that.)
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-20 pt-12 border-t border-border"
                >
                    <p className="text-xl font-bold">Connect with me</p>
                    <p className="text-primary">@spandyz</p>
                </motion.div>
            </div>
        </SlideLayout>
    );
}
