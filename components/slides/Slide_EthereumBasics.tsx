"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";

export function Slide_EthereumBasics() {
    return (
        <SlideLayout title="Ethereum: World Computer">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-8 items-center">
                <div className="space-y-6 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card p-6 rounded-xl border border-blue-500/30"
                    >
                        <h3 className="text-2xl font-bold text-blue-500 mb-2">Smart Contracts</h3>
                        <p className="text-lg">Programmable money. "If this happens, then pay that."</p>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground text-sm">
                            <li>Example: If flight delayed {'>'} 2 hours, pay insurance automatically.</li>
                            <li>No paperwork, no human processing.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-card p-6 rounded-xl border border-blue-500/30"
                    >
                        <h3 className="text-2xl font-bold text-blue-500 mb-2">dApps</h3>
                        <p className="text-lg">Decentralized Applications using the global computer.</p>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground text-sm">
                            <li>DeFi (Banks without bankers).</li>
                            <li>NFTs (Digital ownership).</li>
                        </ul>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex justify-center order-1 md:order-2"
                >
                    <div className="w-64 h-64 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50">
                        <span className="text-9xl font-black text-white">Ξ</span>
                    </div>
                </motion.div>
            </div>
        </SlideLayout>
    );
}
