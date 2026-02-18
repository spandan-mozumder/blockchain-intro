"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Download, Droplets, Send } from "lucide-react";

export function Slide20_Homework() {
    return (
        <SlideLayout title="Homework (The Fun Kind)">
            <div className="max-w-4xl mx-auto w-full mt-8">
                <ul className="space-y-8">
                    <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center bg-card/50 p-6 rounded-xl border border-border"
                    >
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-6">
                            <Download className="w-6 h-6 text-orange-500" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-bold">1. Download a Wallet</h3>
                            <p className="text-muted-foreground">Install MetaMask or Phantom on your browser.</p>
                        </div>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center bg-card/50 p-6 rounded-xl border border-border"
                    >
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-6">
                            <Droplets className="w-6 h-6 text-blue-500" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-bold">2. Get "Fake Money"</h3>
                            <p className="text-muted-foreground">Go to a "Sepolia Faucet" and request some ETH.</p>
                        </div>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center bg-card/50 p-6 rounded-xl border border-border"
                    >
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-6">
                            <Send className="w-6 h-6 text-green-500" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-bold">3. Send it to a Friend</h3>
                            <p className="text-muted-foreground">Send "Fake Money" to the person sitting next to you.</p>
                        </div>
                    </motion.li>
                </ul>
            </div>
        </SlideLayout>
    );
}
