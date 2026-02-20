"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { FileCode2 } from "lucide-react";

export function Slide_Def_SmartContract() {
    return (
        <SlideLayout title="What is a Smart Contract?">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center max-w-4xl"
            >
                <div className="bg-blue-500/10 p-8 rounded-full mb-8">
                    <FileCode2 className="w-24 h-24 text-blue-500" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-blue-500">
                    "Code that Cannot be Stopped."
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl leading-relaxed">
                    It's a regular computer program, but it runs on the blockchain instead of a normal server.
                    <br /><br />
                    Once you deploy it, <span className="font-bold text-white">no one</span> (not even the creator) can change or stop it. It reliably executes exactly as programmed: <br />
                    <span className="text-blue-400 font-bold">"If X happens, then do Y."</span>
                </p>
            </motion.div>
        </SlideLayout>
    );
}
