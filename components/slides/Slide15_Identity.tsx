"use client";

import { SlideLayout } from "./SlideLayout";
import { GraduationCap, ShieldCheck, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Slide15_Identity() {
    return (
        <SlideLayout title="Identity & Verifiable Credentials">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-8">

                {/* Old Way */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card/30 border border-border p-8 rounded-2xl flex flex-col items-center grayscale opacity-80"
                >
                    <div className="relative mb-6">
                        <GraduationCap className="w-24 h-24 text-muted-foreground" />
                        <XCircle className="w-12 h-12 text-red-500 absolute -bottom-2 -right-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Paper Certificates</h3>
                    <ul className="text-left space-y-2 text-muted-foreground">
                        <li>• Easily faked (Photoshop)</li>
                        <li>• Hard to verify (Call the University)</li>
                        <li>• Can be lost or destroyed</li>
                    </ul>
                </motion.div>

                {/* New Way */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card border-2 border-primary/50 p-8 rounded-2xl flex flex-col items-center shadow-lg shadow-primary/10"
                >
                    <div className="relative mb-6">
                        <GraduationCap className="w-24 h-24 text-primary" />
                        <ShieldCheck className="w-12 h-12 text-green-500 absolute -bottom-2 -right-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Digital Credentials</h3>
                    <ul className="text-left space-y-2 text-muted-foreground">
                        <li>• Impossible to fake (Signed by Uni's Private Key)</li>
                        <li>• Instant verification (Click a link)</li>
                        <li>• Owned by YOU, forever</li>
                    </ul>
                </motion.div>

            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 text-xl max-w-2xl text-muted-foreground"
            >
                "Imagine applying for a job, you share a link, and the employer KNOWS instantly that Techno India University issued it."
            </motion.p>
        </SlideLayout>
    );
}
