"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";

const steps = [
    {
        step: "1) Create",
        detail: "User creates a transaction in a wallet (sender, receiver, amount, fee).",
        irl: "Like filling a courier form with destination and package details.",
    },
    {
        step: "2) Sign",
        detail: "Wallet signs the transaction with the private key to prove ownership.",
        irl: "Like adding your verified signature on a legal document.",
    },
    {
        step: "3) Broadcast",
        detail: "Transaction is sent to the peer-to-peer network and shared to nodes.",
        irl: "Like sending a message in a class WhatsApp group where everyone can verify it.",
    },
    {
        step: "4) Validate",
        detail: "Nodes check balance, signature validity, nonce/order, and protocol rules.",
        irl: "Like examiners checking roll number, signature, and answer format before grading.",
    },
    {
        step: "5) Include in Block",
        detail: "A validator/miner packages valid transactions into a block.",
        irl: "Like batching approved forms into one sealed file for office record.",
    },
    {
        step: "6) Confirm + Finalize",
        detail: "Block is accepted by consensus and becomes part of chain history.",
        irl: "Like board-approved minutes entered permanently in official register.",
    },
];

export function Slide_TransactionLifecycle() {
    return (
        <SlideLayout title="Transaction Lifecycle (End-to-End)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mt-4 text-left">
                {steps.map((item, index) => (
                    <motion.div
                        key={item.step}
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.07 }}
                        className="bg-card border border-border rounded-2xl p-5"
                    >
                        <h3 className="text-xl font-bold text-primary">{item.step}</h3>
                        <p className="mt-2 text-base md:text-lg">{item.detail}</p>
                        <p className="mt-3 text-sm text-muted-foreground">🏫 IRL analogy: {item.irl}</p>
                    </motion.div>
                ))}
            </div>
        </SlideLayout>
    );
}
