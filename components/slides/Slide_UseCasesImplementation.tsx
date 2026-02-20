"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";

const useCases = [
    {
        topic: "Payments & Remittance",
        why: "Borderless, 24/7 settlement with transparent fees.",
        implementation: "Use stablecoins for transfer value and convert on/off ramps safely.",
    },
    {
        topic: "Supply Chain Provenance",
        why: "Shared tamper-evident history across manufacturers, logistics, and retailers.",
        implementation: "Store proofs/hashes on-chain, keep large private docs off-chain.",
    },
    {
        topic: "Identity & Credentials",
        why: "Users can prove claims without exposing full personal data.",
        implementation: "Issue verifiable credentials and check signatures at verification time.",
    },
    {
        topic: "DeFi",
        why: "Open financial primitives: lending, swapping, collateral, and yield.",
        implementation: "Teach risk controls: over-collateralization, liquidations, oracle risk.",
    },
    {
        topic: "NFTs Beyond Art",
        why: "Digital ownership for tickets, certificates, memberships, and game items.",
        implementation: "Use metadata standards and royalty or transfer policy where needed.",
    },
    {
        topic: "DAOs",
        why: "Transparent community coordination and treasury decisions.",
        implementation: "Design voting rules, quorum, and emergency controls before launch.",
    },
];

export function Slide_UseCasesImplementation() {
    return (
        <SlideLayout title="Real-World Use Cases + How To Implement">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl mt-4 text-left">
                {useCases.map((item, index) => (
                    <motion.div
                        key={item.topic}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className="bg-card border border-border rounded-2xl p-5"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-primary">{item.topic}</h3>
                        <p className="mt-2">Why it matters: {item.why}</p>
                        <p className="mt-3 text-sm text-muted-foreground">Implementation idea: {item.implementation}</p>
                    </motion.div>
                ))}
            </div>
        </SlideLayout>
    );
}
