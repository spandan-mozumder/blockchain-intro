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
                "Major compliance reports consistently estimate illicit crypto activity as well below 1% of total on-chain volume.",
                "Law-enforcement teams use blockchain analytics to trace many criminal flows over time."
            ]}
        />
    );
}
