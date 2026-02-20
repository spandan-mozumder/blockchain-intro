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
                "Proof of Stake networks generally use dramatically less energy than Proof of Work networks.",
                "After Ethereum moved to Proof of Stake, public estimates showed roughly a ~99.9% drop in network energy demand."
            ]}
        />
    );
}
