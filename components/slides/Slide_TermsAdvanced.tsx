"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";

const terms = [
    {
        term: "Public Key / Private Key",
        definition: "Public key identifies your address; private key authorizes spending.",
        implementation: "Never share private keys; hardware wallets reduce signing risk.",
    },
    {
        term: "Smart Contract",
        definition: "Code on-chain that executes predefined rules automatically.",
        implementation: "Use audits, tests, and access controls before deployment.",
    },
    {
        term: "Gas Fee",
        definition: "Fee paid for computation and storage on a blockchain network.",
        implementation: "Optimize contract code and batch operations to reduce costs.",
    },
    {
        term: "Token vs Coin",
        definition: "Coins are native assets; tokens are issued by contracts on a chain.",
        implementation: "Example: ETH is a coin, many ERC-20 assets are tokens on Ethereum.",
    },
    {
        term: "Finality",
        definition: "The confidence that a confirmed transaction will not be reversed.",
        implementation: "For high-value payments, wait more confirmations.",
    },
    {
        term: "Bridge",
        definition: "Infrastructure that moves assets/messages between chains.",
        implementation: "Treat bridges as high-risk components and verify trust assumptions.",
    },
];

export function Slide_TermsAdvanced() {
    return (
        <SlideLayout title="Advanced Terms + Implementation Lens">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl mt-4 text-left">
                {terms.map((item, index) => (
                    <motion.div
                        key={item.term}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className="bg-card border border-border rounded-2xl p-5"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-primary">{item.term}</h3>
                        <p className="text-base md:text-lg mt-2">{item.definition}</p>
                        <p className="text-sm mt-3 text-muted-foreground">⚙️ Implementation: {item.implementation}</p>
                    </motion.div>
                ))}
            </div>
        </SlideLayout>
    );
}
