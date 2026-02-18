"use client";

import { SlideLayout } from "./SlideLayout";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";

export function Slide10_HashDemo() {
    const [input, setInput] = useState("Alice pays Bob 5 Tokens");
    const [hash, setHash] = useState("");
    const [prevHash, setPrevHash] = useState("");

    const calculateHash = async (text: string) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    };

    useEffect(() => {
        const updateHash = async () => {
            const newHash = await calculateHash(input);
            setPrevHash(hash);
            setHash(newHash);
        };
        updateHash();
    }, [input]);

    const isChanged = prevHash !== hash && prevHash !== "";

    return (
        <SlideLayout title="Live Demo: The Hash">
            <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
                <div className="w-full space-y-4">
                    <Label htmlFor="data" className="text-2xl font-bold">Data (The "Block")</Label>
                    <Input
                        id="data"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="text-2xl p-6 h-auto font-mono bg-card/50 border-primary/20 focus:border-primary"
                    />
                </div>

                <div className="w-full space-y-4 relative">
                    <Label className="text-2xl font-bold">SHA-256 Hash (Digital Fingerprint)</Label>

                    <div className="relative overflow-hidden rounded-xl bg-black/50 border border-border p-6 shadow-inset">
                        <motion.div
                            key={hash}
                            initial={{ opacity: 0.5, color: "#ef4444" }}
                            animate={{ opacity: 1, color: "#22c55e" }}
                            transition={{ duration: 0.5 }}
                            className="font-mono text-3xl md:text-4xl break-all"
                        >
                            {hash}
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {isChanged && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-red-500 font-bold mt-2 text-xl absolute -bottom-10 left-0 w-full text-center"
                            >
                                HASH CHANGED! INTEGRITY BROKEN!
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-12 text-left bg-muted/20 p-6 rounded-lg border border-primary/10">
                    <h3 className="text-xl font-bold mb-2 text-primary">Key Takeaway</h3>
                    <p className="text-lg text-muted-foreground">
                        "This is why you can't hack it. If you change one tiny record, the digital fingerprint breaks, and the whole network rejects you."
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}
