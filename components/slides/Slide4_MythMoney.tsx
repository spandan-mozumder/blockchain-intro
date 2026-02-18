"use client";

import { MythCard } from "./MythCard";

export function Slide4_MythMoney() {
    return (
        <MythCard
            mythNumber={1}
            title="The Money Myth"
            statement="Blockchain = Bitcoin. They are the same thing."
            verdict="CAP"
            realityPoints={[
                "Blockchain is the Operating System (Like Android).",
                "Bitcoin is just one app on that OS (Like WhatsApp)."
            ]}
            analogy="Blaming Blockchain for Bitcoin's price crash is like blaming the Internet because Facebook went down."
        />
    );
}
