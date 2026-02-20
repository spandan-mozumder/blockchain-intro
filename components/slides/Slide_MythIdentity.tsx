"use client";

import { MythCard } from "./MythCard";

export function Slide_MythIdentity() {
    return (
        <MythCard
            mythNumber={10}
            title="The Identity Myth"
            statement="Digital certificates and degrees can be easily forged or photoshopped."
            verdict="CAP"
            realityPoints={[
                "Digital Credentials are signed by the issuer's private key.",
                "Impossible to fake, instantly verifiable, and owned by YOU forever.",
            ]}
            analogy="Imagine applying for a job, you share a link, and the employer KNOWS instantly that Techno India University issued it."
        />
    );
}
