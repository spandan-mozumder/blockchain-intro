"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { FileText, Users, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Slide9_GoogleDocs() {
    return (
        <SlideLayout title='The "Google Docs" Analogy'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 w-full">

                {/* Web2: Microsoft Word */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card/50 border border-border rounded-2xl p-8 flex flex-col items-center"
                >
                    <div className="w-24 h-24 bg-blue-900 rounded-xl flex items-center justify-center mb-6 relative">
                        <FileText className="w-12 h-12 text-white" />
                        <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-2">
                            <X className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Web2 (Microsoft Word)</h2>
                    <ul className="text-left space-y-4 text-muted-foreground list-disc pl-6">
                        <li>I send you a file.</li>
                        <li>Now there are <strong className="text-foreground">two copies</strong>.</li>
                        <li>I can change mine; you don't see it.</li>
                        <li><span className="text-red-500 font-bold">Inconsistent Truth.</span></li>
                    </ul>
                </motion.div>

                {/* Web3: Google Docs */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card/50 border border-border rounded-2xl p-8 flex flex-col items-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-green-500/5 -z-10" />
                    <div className="w-24 h-24 bg-blue-500 rounded-xl flex items-center justify-center mb-6 relative">
                        <FileText className="w-12 h-12 text-white" />
                        <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2">
                            <Check className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-2">
                            <Users className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Web3 (Google Docs)</h2>
                    <ul className="text-left space-y-4 text-muted-foreground list-disc pl-6">
                        <li>We look at the <strong className="text-foreground">same file</strong>.</li>
                        <li>If I type, you see it <strong className="text-foreground">instantly</strong>.</li>
                        <li>No one can delete the history.</li>
                        <li><span className="text-green-500 font-bold">Shared Truth (Ledger).</span></li>
                    </ul>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
