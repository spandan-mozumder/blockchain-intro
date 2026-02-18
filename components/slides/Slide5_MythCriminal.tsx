"use client";

import { MythCard } from "./MythCard";

export function Slide5_MythCriminal() {
    return (
        <MythCard
            mythNumber={2}
            title="The Criminal Myth"
            statement="Crypto is mostly used by criminals for illegal things."
            verdict="CAP"
            realityPoints={[
                "Cash is untraceable. Crypto creates a PERMANENT public record forever.",
                "In 2024, less than 0.34% of crypto volume was illicit.",
                "Criminals hate using it because the FBI can track it on the ledger."
            ]}
        />
    );
}
