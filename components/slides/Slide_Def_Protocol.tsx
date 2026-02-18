"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export function Slide_Def_Protocol() {
    return (
        <SlideLayout title="What is a Protocol?">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center max-w-4xl"
            >
                <div className="bg-blue-500/10 p-8 rounded-full mb-8">
                    <Globe className="w-24 h-24 text-blue-500" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    "A Set of Rules."
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl leading-relaxed">
                    It's the language computers speak to agree.
                    <br />
                    Like <strong>HTTP</strong> for websites or <strong>SMTP</strong> for email.
                    <br />
                    Blockchain is just a protocol for <span className="text-blue-400 font-bold">Value</span>.
                </p>
            </motion.div>
        </SlideLayout>
    );
}
