"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Banknote, Image as ImageIcon, Repeat, Ban } from "lucide-react";

export function Slide_Tokens() {
    return (
        <SlideLayout title="Tokens: The Stuff We Own">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full mt-8">

                {/* Fungible */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card/30 border border-border p-8 rounded-3xl flex flex-col items-center"
                >
                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <Banknote className="w-12 h-12 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Fungible (ERC-20)</h2>
                    <p className="text-lg text-muted-foreground mb-6">Like a $10 Bill</p>

                    <div className="bg-background/50 p-4 rounded-xl border border-border w-full flex items-center gap-4">
                        <Repeat className="w-8 h-8 text-muted-foreground" />
                        <p className="text-left text-sm">
                            If we swap $10 bills, it doesn't matter. They are exactly the same value.
                        </p>
                    </div>
                </motion.div>

                {/* Non-Fungible */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card border-2 border-purple-500/50 p-8 rounded-3xl flex flex-col items-center shadow-lg shadow-purple-500/10"
                >
                    <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                        <ImageIcon className="w-12 h-12 text-purple-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Non-Fungible (NFT)</h2>
                    <p className="text-lg text-muted-foreground mb-6">Like the Mona Lisa</p>

                    <div className="bg-background/50 p-4 rounded-xl border border-border w-full flex items-center gap-4">
                        <Ban className="w-8 h-8 text-purple-500" />
                        <p className="text-left text-sm">
                            If we swap paintings, it matters! One is original, one is different. Unique ID.
                        </p>
                    </div>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
