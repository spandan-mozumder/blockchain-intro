"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Slide_History() {
    return (
        <SlideLayout title="Evolution of Value">
            <div className="flex flex-col gap-8 w-full max-w-4xl mt-8">
                {[
                    { title: "Barter", icon: "🤝", desc: "Trading goods directly." },
                    { title: "Gold", icon: "🥇", desc: "Physical store of value." },
                    { title: "Coins/Paper", icon: "💰", desc: "Government issued currency." },
                    { title: "Digital Banking", icon: "💳", desc: "Electronic ledgers (Centralized)." },
                    { title: "Crypto", icon: "₿", desc: "Programmable Money (Decentralized)." },
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
                        </div>
                        {index < 4 && <ArrowRight className="text-muted-foreground w-6 h-6" />}
                    </motion.div>
                ))}
            </div>
        </SlideLayout>
    );
}
