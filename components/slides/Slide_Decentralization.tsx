"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Server, Network, User, ShieldAlert, ShieldCheck } from "lucide-react";

export function Slide_Decentralization() {
    return (
        <SlideLayout title="Centralized vs Decentralized">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full mt-8">

                {/* Centralized */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card/30 border border-border p-8 rounded-3xl flex flex-col items-center"
                >
                    <div className="relative mb-8">
                        <Server className="w-32 h-32 text-red-500" />
                        <div className="absolute -top-4 -right-4 bg-red-500/20 p-2 rounded-full">
                            <ShieldAlert className="w-8 h-8 text-red-500" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-red-400">The Bank (Web2)</h2>
                    <div className="flex gap-4 text-muted-foreground">
                        <User className="w-8 h-8" />
                        <User className="w-8 h-8" />
                        <User className="w-8 h-8" />
                    </div>
                    <p className="mt-6 text-lg text-muted-foreground">
                        "If the server dies, we all die. The CEO controls everything."
                    </p>
                </motion.div>

                {/* Decentralized */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card border-2 border-primary/50 p-8 rounded-3xl flex flex-col items-center shadow-2xl shadow-primary/10"
                >
                    <div className="relative mb-8">
                        <Network className="w-32 h-32 text-primary animate-pulse" />
                        <div className="absolute -top-4 -right-4 bg-green-500/20 p-2 rounded-full">
                            <ShieldCheck className="w-8 h-8 text-green-500" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-primary">The Blockchain (Web3)</h2>
                    <div className="grid grid-cols-3 gap-4 text-primary/70">
                        <Server className="w-8 h-8" />
                        <Server className="w-8 h-8" />
                        <Server className="w-8 h-8" />
                        <Server className="w-8 h-8" />
                        <Server className="w-8 h-8" />
                        <Server className="w-8 h-8" />
                    </div>
                    <p className="mt-6 text-lg text-muted-foreground">
                        "Thousands of computers (Nodes) agree on the truth. If one dies, the network survives."
                    </p>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
