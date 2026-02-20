"use client";

import { SlideLayout } from "./SlideLayout";
import { motion } from "framer-motion";

interface TeamMember {
    name: string;
    role: string;
    image: string;
    accent: string;
    border: string;
    portfolio?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Spandan",
        role: "Blockchain Lead",
        image: "/spandan.jpg",
        accent: "text-primary",
        border: "border-primary/20",
        portfolio: "https://spandyz.xyz",
    },
    {
        name: "Piush",
        role: "Domain Member",
        image: "/piush.jpg",
        accent: "text-blue-400",
        border: "border-blue-400/20",
        portfolio: "https://linktr.ee/devpiush",
    },
    {
        name: "Adarsh",
        role: "Blockchain Lead",
        image: "/adarsh.jpg",
        accent: "text-purple-400",
        border: "border-purple-400/20",
    },
];

export function Slide22_Team() {
    return (
        <SlideLayout>
            <div className="flex flex-col items-center justify-center space-y-12">
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-400 mb-4"
                >
                    Blockchain Team
                </motion.h1>

                <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl text-center">
                    Meet the speakers leading this blockchain class: two blockchain leads and one domain member.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-16">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.2 }}
                            className="flex flex-col items-center space-y-5"
                        >
                            <div className={`w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 ${member.border} relative`}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const img = e.target as HTMLImageElement;
                                        img.src = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><rect width="100%" height="100%" fill="#d4d4d8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="42" fill="#18181b" font-family="sans-serif">${member.name}</text></svg>`)}`;
                                    }}
                                />
                            </div>
                            <div className="text-center">
                                <h2 className="text-3xl md:text-4xl font-bold">{member.name}</h2>
                                <p className={`text-xl md:text-2xl font-medium mt-2 ${member.accent}`}>{member.role}</p>
                                {member.portfolio && (
                                    <a
                                        href={member.portfolio}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 text-sm md:text-base underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Portfolio
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}
