"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Calendar, Code2, Rocket } from "lucide-react";

export function Slide19_Roadmap() {
    return (
        <SlideLayout title="Your Roadmap: From Zero to Hero">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mt-12">

                {/* Month 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center bg-card p-8 rounded-2xl border border-border w-full max-w-sm"
                >
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                        <Calendar className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Month 1</h3>
                    <p className="text-primary font-mono mb-4 text-xl">Smart Contract Basics</p>
                    <p className="text-muted-foreground text-center">Learn how code runs on a decentralized network. Variables, functions, trust.</p>
                </motion.div>

                {/* Month 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center bg-card p-8 rounded-2xl border border-primary w-full max-w-sm shadow-lg shadow-primary/10 relative"
                >
                    <div className="absolute -top-4 bg-primary px-4 py-1 rounded-full text-xs font-bold text-primary-foreground">
                        BUILDING PHASE
                    </div>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                        <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Month 2</h3>
                    <p className="text-primary font-mono mb-4 text-xl">Build a dApp</p>
                    <p className="text-muted-foreground text-center">Create a frontend (Next.js) that talks to your contract. A voting app is perfect.</p>
                </motion.div>

                {/* Month 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col items-center bg-card p-8 rounded-2xl border border-border w-full max-w-sm"
                >
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                        <Rocket className="w-8 h-8 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Month 3</h3>
                    <p className="text-primary font-mono mb-4 text-xl">Deploy & Verify</p>
                    <p className="text-muted-foreground text-center">Push your code to a Testnet. See it live on a generic Block Explorer.</p>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
