"use client";

import { MythCard } from "./MythCard";

export function Slide_MythSupplyChain() {
    return (
        <MythCard
            mythNumber={9}
            title="The Supply Chain Myth"
            statement="Blockchain is just for finance; it has no real-world use."
            verdict="CAP"
            realityPoints={[
                "Blockchain tracks physical goods from factory to customer.",
                "Every step is cryptographically signed, preventing fraud.",
            ]}
            analogy="How do you know those Jordans aren't fake? If the factory didn't sign the block, the shoe is fake."
        />
    );
}
