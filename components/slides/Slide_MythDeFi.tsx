"use client";

import { MythCard } from "./MythCard";

export function Slide_MythDeFi() {
    return (
        <MythCard
            mythNumber={11}
            title="The DeFi Myth"
            statement="I always need a bank or middleman to borrow or lend money."
            verdict="CAP"
            realityPoints={[
                "DeFi (Decentralized Finance) replaces the bank with Smart Contracts (code).",
                "Lend directly to software and earn the interest yourself.",
            ]}
            analogy="DeFi is just banking software without the bank. No manager takes a 5% cut."
        />
    );
}
