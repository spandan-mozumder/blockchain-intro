"use client";

import { MythCard } from "./MythCard";

export function Slide8_MythDatabase() {
    return (
        <MythCard
            mythNumber={5}
            title="The Database Myth"
            statement="It's just a slow cloud database."
            verdict="FACT"
            realityPoints={[
                "Yes, it IS slower than a normal database.",
                "BUT: It offers something Google Cloud can't: TRUST.",
            ]}
            analogy="Speed is the price we pay for knowing nobody is lying."
        />
    );
}
