"use client";

import { MythCard } from "./MythCard";

export function Slide_MythHacking() {
    return (
        <MythCard
            mythNumber={6}
            title="The Invincible Myth"
            statement="Blockchain is unhackable and 100% secure."
            verdict="CAP"
            realityPoints={[
                "The Blockchain (L1) is secure mathematically.",
                "BUT: Smart Contracts (the apps) can have bugs.",
                "Visual: The Vault is impossible to break, but you might accidentally leave the door open."
            ]}
        />
    );
}
