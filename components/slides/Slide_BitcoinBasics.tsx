"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";

export function Slide_BitcoinBasics() {
    return (
        <SlideLayout title="Bitcoin: Digital Gold">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-8 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex justify-center"
                >
                    <div className="w-64 h-64 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50">
                        <span className="text-9xl font-black text-white">₿</span>
                    </div>
                </motion.div>
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card p-6 rounded-xl border border-orange-500/30"
                    >
                        <h3 className="text-2xl font-bold text-orange-500 mb-2">Store of Value</h3>
                        <p className="text-lg">Like digital gold. Scarcity is built in (21 Million max).</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-card p-6 rounded-xl border border-orange-500/30"
                    >
                        <h3 className="text-2xl font-bold text-orange-500 mb-2">Peer-to-Peer</h3>
                        <p className="text-lg">Send money anywhere without a bank.</p>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
}
