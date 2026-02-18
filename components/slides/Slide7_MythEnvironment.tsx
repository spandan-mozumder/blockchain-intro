"use client";

import { MythCard } from "./MythCard";

export function Slide7_MythEnvironment() {
    return (
        <MythCard
            mythNumber={4}
            title="The Environment Myth"
            statement="Blockchain destroys the environment and melts polar bears."
            verdict="OUTDATED"
            realityPoints={[
                "Old Tech (Bitcoin/Proof of Work) = High Energy.",
                "New Tech (Ethereum/Solana/Proof of Stake) = 99.9% less energy.",
                "The entire Ethereum network now uses less energy than PayPal or YouTube."
            ]}
        />
    );
}
