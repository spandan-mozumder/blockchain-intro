"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";

const checks = [
    "Never share seed phrase or private key.",
    "Verify URLs and contract addresses before signing.",
    "Use hardware wallets for high-value funds.",
    "Use multi-signature wallets for team treasury control.",
    "Treat bridges and newly launched protocols as higher risk.",
    "Use testnets and audits before mainnet deployment.",
    "Understand MEV, slippage, liquidation, and oracle risks in DeFi.",
    "Teach students: decentralization lowers trust assumptions, not all risk.",
];

export function Slide_SecurityChecklist() {
    return (
        <SlideLayout title="Security Reality Check">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 w-full max-w-5xl text-left">
                <p className="text-lg md:text-xl mb-6 text-muted-foreground">
                    Blockchain systems are resilient, but users and applications can still fail. Security is process + tooling + behavior.
                </p>

                <div className="space-y-4">
                    {checks.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -18 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.06 }}
                            className="flex items-start gap-3"
                        >
                            <span className="text-primary mt-1">✓</span>
                            <p className="text-base md:text-lg">{item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}
