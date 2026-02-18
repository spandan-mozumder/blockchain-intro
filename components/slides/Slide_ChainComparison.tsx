"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function Slide_ChainComparison() {
    return (
        <SlideLayout title="The Comparison">
            <div className="w-full max-w-5xl mt-8">
                <div className="grid grid-cols-4 gap-4 text-center font-bold text-xl mb-4 text-muted-foreground">
                    <div></div>
                    <div className="text-orange-500">Bitcoin</div>
                    <div className="text-blue-500">Ethereum</div>
                    <div className="text-[#14F195]">Solana</div>
                </div>

                <div className="space-y-4">
                    {[
                        { label: "Speed", btc: "Slow (7 TPS)", eth: "Medium (15 TPS)", sol: "Fast (65k TPS)" },
                        { label: "Cost", btc: "High ($)", eth: "High ($$)", sol: "Low ($0.00025)" },
                        { label: "Smart Contracts", btc: false, eth: true, sol: true },
                        { label: "Energy", btc: "High (Mining)", eth: "Low (PoS)", sol: "Low (PoS)" },
                    ].map((row, index) => (
                        <motion.div
                            key={row.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="grid grid-cols-4 gap-4 items-center bg-card/50 p-4 rounded-xl border border-border"
                        >
                            <div className="font-bold text-left pl-4">{row.label}</div>
                            <div className="flex justify-center items-center">
                                {typeof row.btc === "boolean" ? (row.btc ? <Check className="text-green-500" /> : <X className="text-red-500" />) : row.btc}
                            </div>
                            <div className="flex justify-center items-center">
                                {typeof row.eth === "boolean" ? (row.eth ? <Check className="text-green-500" /> : <X className="text-red-500" />) : row.eth}
                            </div>
                            <div className="flex justify-center items-center font-bold">
                                {typeof row.sol === "boolean" ? (row.sol ? <Check className="text-green-500" /> : <X className="text-red-500" />) : row.sol}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}
