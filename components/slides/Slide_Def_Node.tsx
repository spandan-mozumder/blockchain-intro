"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";


export function Slide_Def_Node() {
    return (
        <SlideLayout title="What is a Node?">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center max-w-4xl"
            >
                <div className="bg-primary/10 p-8 rounded-full mb-8">
                    {/* Using standard Lucide icons that exist */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect width="16" height="16" x="4" y="4" rx="2" />
                        <rect width="6" height="6" x="9" y="9" rx="1" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                    </svg>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    "A Computer Running the Rules."
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl leading-relaxed">
                    A node is just any computer (like your laptop) that has a copy of the blockchain ledger and checks if new transactions follow the rules.
                    <br /><br />
                    <span className="text-primary font-bold">More Nodes = More Decentralized = Harder to Hack.</span>
                </p>
            </motion.div>
        </SlideLayout>
    );
}
