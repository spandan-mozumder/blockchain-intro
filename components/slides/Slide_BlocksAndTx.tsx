"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Box, FileText } from "lucide-react";

export function Slide_BlocksAndTx() {
    return (
        <SlideLayout title="Blocks & Transactions">
            <div className="flex flex-col md:flex-row gap-12 w-full mt-8 items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center bg-card p-8 rounded-2xl border border-primary/20"
                >
                    <FileText className="w-24 h-24 text-blue-400 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Transaction</h3>
                    <p className="text-lg text-muted-foreground text-center">"Alice sends 5 SOL to Bob"</p>
                    <p className="mt-4 text-sm font-mono bg-muted p-2 rounded">One line in the ledger.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-bold text-muted-foreground"
                >
                    →
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center bg-card p-8 rounded-2xl border border-primary/20 relative"
                >
                    <Box className="w-24 h-24 text-orange-400 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Block</h3>
                    <p className="text-lg text-muted-foreground text-center">A Batch of Transactions</p>
                    <p className="mt-4 text-sm font-mono bg-muted p-2 rounded">A Page in the book. Full of lines.</p>
                </motion.div>
            </div>
        </SlideLayout>
    );
}
