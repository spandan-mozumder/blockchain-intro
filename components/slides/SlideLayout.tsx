"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideLayoutProps {
    children: ReactNode;
    title?: string;
    className?: string;
}

export function SlideLayout({ children, title, className }: SlideLayoutProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cn(
                "flex flex-col items-center justify-center min-h-screen w-full p-8 text-center relative overflow-hidden",
                className
            )}
        >
            {title && (
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                >
                    {title}
                </motion.h1>
            )}
            <div className="w-full max-w-6xl z-10 flex flex-col items-center justify-center">
                {children}
            </div>

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 to-background pointer-events-none" />
        </motion.div>
    );
}
