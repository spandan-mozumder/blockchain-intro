"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Key, Mail } from "lucide-react";

export function Slide_Keys() {
    return (
        <SlideLayout title="Keys & Wallets">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mt-8">

                {/* Public Key */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card p-8 rounded-3xl border border-green-500/30 flex flex-col items-center text-center"
                >
                    <div className="bg-green-500/20 p-6 rounded-full mb-6">
                        <Mail className="w-16 h-16 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Public Key</h3>
                    <p className="text-sm font-mono text-muted-foreground mb-4">0x71C...9A2</p>
                    <p className="text-lg">
                        Like your <strong>Email Address</strong> or <strong>Mailbox</strong>.
                    </p>
                    <p className="text-muted-foreground mt-2">
                        You can share this with anyone so they can send you money.
                    </p>
                </motion.div>

                {/* Private Key */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card p-8 rounded-3xl border border-red-500/30 flex flex-col items-center text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                        KEEP SECRET
                    </div>
                    <div className="bg-red-500/20 p-6 rounded-full mb-6">
                        <Key className="w-16 h-16 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Private Key</h3>
                    <p className="text-sm font-mono text-muted-foreground mb-4">****...****</p>
                    <p className="text-lg">
                        Like your <strong>Password</strong> or <strong>Mailbox Key</strong>.
                    </p>
                    <p className="text-muted-foreground mt-2">
                        Used to sign transactions (open the mailbox). NEVER share this.
                    </p>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
