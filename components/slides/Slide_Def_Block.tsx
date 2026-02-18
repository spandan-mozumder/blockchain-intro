"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";
import { Box, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Slide_Def_Block() {
    return (
        <SlideLayout title="What is a Block?">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center max-w-4xl"
            >
                <div className="bg-yellow-500/10 p-8 rounded-full mb-8">
                    <Box className="w-24 h-24 text-yellow-500" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    "A Container for Data."
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl leading-relaxed mb-12">
                    A box that holds transactions. When full, we seal it (hash it) and chain it to the next one.
                </p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        size="lg"
                        className="text-xl px-8 py-6 rounded-full font-bold bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => window.open("https://andersbrownworth.com/blockchain/blockchain", "_blank")}
                    >
                        <ExternalLink className="mr-2 w-6 h-6" />
                        Open Live Simulation
                    </Button>
                </motion.div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                    (Anders Brownworth's Blockchain Demo)
                </p>
            </motion.div>
        </SlideLayout>
    );
}
