"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function Slide_Def_Ledger() {
    return (
        <SlideLayout title="What is a Ledger?">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center max-w-4xl"
            >
                <div className="bg-primary/10 p-8 rounded-full mb-8">
                    <BookOpen className="w-24 h-24 text-primary" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    "A Record of Truth."
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl leading-relaxed">
                    It's just a list of transactions.
                    <br />
                    <span className="text-primary font-bold">Alice sent 5 to Bob.</span>
                    <br />
                    That's it. Whether it's a bank or a blockchain, the core is just a list.
                </p>
            </motion.div>
        </SlideLayout>
    );
}
