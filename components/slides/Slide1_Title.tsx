"use client";

import { SlideLayout } from "./SlideLayout";
import { Canvas } from "@react-three/fiber";
import { BlockMesh } from "../visuals/BlockMesh";
import { Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";

export function Slide1_Title() {
    return (
        <SlideLayout className="justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full min-h-[60vh] py-12 md:py-0">

                {/* Text Content */}
                <div className="text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-7xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">
                            BLOCKCHAIN
                        </h1>
                        <h2 className="text-5xl md:text-4xl font-bold text-primary mt-2">
                            BEYOND THE HYPE
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-muted-foreground font-light"
                    >
                        Building the Next Internet, Not Just Buying Coins.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="pt-8 border-t border-border mt-8"
                    >
                        <p className="font-mono text-sm text-primary/80">Spandan Mozumder & Adarsh Gupta | GDSC Techno India University</p>
                    </motion.div>
                </div>

                {/* 3D Visual */}
                <div className="h-full w-full min-h-[400px]">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                            <BlockMesh />
                        </Float>
                        <Environment preset="city" />
                    </Canvas>
                </div>
            </div>
        </SlideLayout>
    );
}
