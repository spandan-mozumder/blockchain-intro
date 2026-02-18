"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Copy, ArrowRight, XCircle } from "lucide-react";

export function Slide_DoubleSpend() {
    return (
        <SlideLayout title="The Double Spend Problem">
            <div className="flex flex-col items-center justify-center gap-12 w-full max-w-5xl mt-8">

                <div className="flex justify-between w-full">
                    {/* Digital File */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center p-6 bg-card rounded-2xl border border-primary/20 flex-1 mx-4"
                    >
                        <Copy className="w-16 h-16 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Sending a Photo</h3>
                        <p className="text-muted-foreground text-center">I send it to you. Now we BOTH have it.</p>
                        <div className="mt-4 bg-red-500/20 text-red-500 px-4 py-1 rounded-full text-sm font-bold">Copy/Paste</div>
                    </motion.div>

                    {/* Digital Money */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center p-6 bg-card rounded-2xl border border-green-500/50 flex-1 mx-4"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-5xl">₿</span>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <span className="text-5xl">👤</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Sending Bitcoin</h3>
                        <p className="text-muted-foreground text-center">I send it to you. I NO LONGER have it.</p>
                        <div className="mt-4 bg-green-500/20 text-green-500 px-4 py-1 rounded-full text-sm font-bold">Transfer of Value</div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex items-center gap-4 max-w-2xl"
                >
                    <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                    <p className="text-lg">
                        <strong>The Problem:</strong> In digital world, copying is easy. Real money shouldn't be copyable.
                        <br />
                        <strong>The Solution:</strong> The Ledger (Blockchain) tracks who owns what, preventing copies.
                    </p>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
