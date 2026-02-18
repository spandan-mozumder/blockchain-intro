"use client";

import { MythCard } from "./MythCard";

export function Slide6_MythRichKid() {
    return (
        <MythCard
            mythNumber={3}
            title="The Rich Kid Myth"
            statement="I need money to start in Blockchain."
            verdict="CAP"
            realityPoints={[
                "It costs $0.00 to write a Smart Contract on a Testnet (Sepolia/Goerli).",
                "You are here to be the Casino Builder, not the Gambler.",
                "Builders get paid; gamblers lose money."
            ]}
        />
    );
}
