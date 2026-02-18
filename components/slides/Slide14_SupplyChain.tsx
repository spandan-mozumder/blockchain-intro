"use client";

import { SlideLayout } from "./SlideLayout";
import { PackageCheck, Truck, Factory, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Slide14_SupplyChain() {
    return (
        <SlideLayout title="Supply Chain: The Trust Machine">
            <div className="flex flex-col items-center gap-12 w-full">
                <div className="flex items-center justify-center gap-4 md:gap-12 w-full">
                    {/* Steps */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                            <Factory className="w-12 h-12 text-blue-500" />
                        </div>
                        <p className="font-bold">Factory</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.4 }} className="h-1 w-12 md:w-32 bg-border" />

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                            <Truck className="w-12 h-12 text-yellow-500" />
                        </div>
                        <p className="font-bold">Logistics</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.8 }} className="h-1 w-12 md:w-32 bg-border" />

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                            <UserCheck className="w-12 h-12 text-green-500" />
                        </div>
                        <p className="font-bold">Customer</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="bg-card p-8 rounded-2xl border border-border flex items-center gap-8 max-w-3xl"
                >
                    <PackageCheck className="w-24 h-24 text-primary" />
                    <div className="text-left">
                        <h3 className="text-2xl font-bold mb-2">Authenticity Verified</h3>
                        <p className="text-lg text-muted-foreground">
                            "How do you know those Jordans aren't fake? Blockchain tracks the shoe from the factory to your door. If the factory didn't sign the block, the shoe is fake."
                        </p>
                    </div>
                </motion.div>
            </div>
        </SlideLayout>
    );
}
