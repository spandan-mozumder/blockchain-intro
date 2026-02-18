"use client";

import { MythCard } from "./MythCard";

export function Slide_MythNFT() {
    return (
        <MythCard
            mythNumber={5}
            title="The JPEG Myth"
            statement="NFTs are just expensive JPEGs. I can right-click save them."
            verdict="CAP"
            realityPoints={[
                "The image is just the receipt.",
                "The NFT proves ownership and authenticity.",
                "Like having the deed to a house vs taking a photo of it."
            ]}
            analogy="You can take a photo of the Mona Lisa, but you don't own it. The museum has the paper that says they own it."
        />
    );
}
