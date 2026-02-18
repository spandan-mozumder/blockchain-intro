"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Banknote, Gamepad2, FileBadge, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface InteractiveCardProps {
    icon: any;
    label: string;
    response: string;
    delay: number;
}

function InteractiveCard({ icon: Icon, label, response, delay }: InteractiveCardProps) {
    const [revealed, setRevealed] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            onClick={() => setRevealed(true)}
            className="cursor-pointer group relative"
        >
            <div className={cn(
                "w-64 h-64 rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80",
                revealed && "border-green-500/50 bg-green-950/20"
            )}>
                <Icon className={cn("w-20 h-20 mb-6 text-muted-foreground transition-colors group-hover:text-foreground", revealed && "text-green-500") as string} />
                <h3 className="text-2xl font-bold mb-2">{label}</h3>
                {revealed && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-background/95 rounded-2xl p-4 text-center border-2 border-green-500"
                    >
                        <CheckCircle2 className="w-12 h-12 text-green-500 mb-2" />
                        <p className="text-lg font-semibold text-green-400">{response}</p>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

export function Slide2_HandsUp() {
    return (
        <SlideLayout title='Raise Your Hand If...'>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                <InteractiveCard
                    icon={Banknote}
                    label="Used UPI Today"
                    response="You trust a digital database."
                    delay={0.2}
                />
                <InteractiveCard
                    icon={Gamepad2}
                    label="Bought a Skin"
                    response="You understand digital assets."
                    delay={0.4}
                />
                <InteractiveCard
                    icon={FileBadge}
                    label="Think Crypto is a Scam"
                    response="Good. Let's talk about why."
                    delay={0.6}
                />
            </div>
        </SlideLayout>
    );
}
