"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";

const terms = [
    {
        term: "Ledger",
        definition: "A record book of transactions.",
        analogy: "Like your school attendance register, but for value transfers.",
    },
    {
        term: "Block",
        definition: "A batch of valid transactions plus metadata.",
        analogy: "Like one sealed page in a notebook that cannot be edited later.",
    },
    {
        term: "Hash",
        definition: "A digital fingerprint of data.",
        analogy: "Like a tamper seal—change one letter and the seal changes fully.",
    },
    {
        term: "Node",
        definition: "A computer that stores, verifies, and shares blockchain data.",
        analogy: "Like an independent exam invigilator checking every answer sheet.",
    },
    {
        term: "Consensus",
        definition: "The method nodes use to agree on one valid state.",
        analogy: "Like class voting with strict rules and transparent counting.",
    },
    {
        term: "Wallet",
        definition: "A tool that manages keys and signs transactions.",
        analogy: "Like a banking app for authorization, not a bag that stores cash.",
    },
];

export function Slide_TermsCore() {
    return (
        <SlideLayout title="Core Terms You Must Master">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl mt-4 text-left">
                {terms.map((item, index) => (
                    <motion.div
                        key={item.term}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className="bg-card border border-border rounded-2xl p-5"
                    >
                        <h3 className="text-2xl font-bold text-primary">{item.term}</h3>
                        <p className="text-lg mt-2">{item.definition}</p>
                        <p className="text-sm mt-3 text-muted-foreground">🧠 Analogy: {item.analogy}</p>
                    </motion.div>
                ))}
            </div>
        </SlideLayout>
    );
}
