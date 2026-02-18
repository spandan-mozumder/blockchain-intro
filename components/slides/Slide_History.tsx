"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Slide_History() {
    return (
        <SlideLayout title="Evolution of Value">
            <div className="flex flex-col gap-8 w-full max-w-4xl mt-8">
                {[
                    { title: "Barter", icon: "🤝", desc: "Trading goods directly.", reason: "Hard to carry cows." },
                    { title: "Gold", icon: "🥇", desc: "Physical store of value.", reason: "Heavy & hard to divide." },
                    { title: "Coins/Paper", icon: "💰", desc: "Government issued currency.", reason: "Inflation (Print too much)." },
                    { title: "Digital Banking", icon: "💳", desc: "Electronic ledgers (Centralized).", reason: "Bank controls your money." },
                    { title: "Crypto", icon: "₿", desc: "Programmable Money (Decentralized).", reason: "You control your money." },
                ].map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center gap-6 bg-card/50 p-4 rounded-xl border border-border"
                    >
                        <span className="text-4xl">{item.icon}</span>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                            <p className="text-xs text-primary mt-1 font-mono">Why move? {item.reason}</p>
                        </div>
                        {index < 4 && <ArrowRight className="text-muted-foreground w-6 h-6" />}
                    </motion.div>
                ))}
            </div>
        </SlideLayout>
    );
}
