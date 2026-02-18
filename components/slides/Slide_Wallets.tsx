"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Wallet, Key, Globe } from "lucide-react";

export function Slide_Wallets() {
    return (
        <SlideLayout title="Wallets vs Accounts">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full mt-12">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center"
                >
                    <div className="bg-card border-2 border-primary p-12 rounded-[2rem] relative">
                        <Wallet className="w-32 h-32 text-primary" />
                        <div className="absolute -bottom-6 -right-6 bg-background border border-border p-4 rounded-xl shadow-xl flex items-center gap-2">
                            <Key className="w-6 h-6 text-yellow-500" />
                            <span className="font-bold">Keys Only</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-md text-left space-y-6"
                >
                    <h2 className="text-4xl font-bold">Your Wallet is Empty.</h2>
                    <p className="text-2xl text-muted-foreground">
                        Wait, what?
                    </p>
                    <div className="bg-card/50 p-6 rounded-xl border border-border">
                        <div className="flex items-start gap-4">
                            <Globe className="w-8 h-8 text-blue-500 mt-1" />
                            <p className="text-lg">
                                Your coins live on the <span className="text-blue-500 font-bold">Blockchain</span> (The Cloud).
                                <br /><br />
                                Your Wallet just holds the <span className="text-yellow-500 font-bold">Key</span> (Password) to move them.
                            </p>
                        </div>
                    </div>
                    <p className="text-xl italic text-muted-foreground">
                        "If you lose the key, the coins stay on the cloud forever, but nobody can move them."
                    </p>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
