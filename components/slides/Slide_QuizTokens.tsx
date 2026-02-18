"use client";

import { QuizCard } from "./QuizCard";

export function Slide_QuizTokens() {
    return (
        <QuizCard
            question="Which of these is an example of an NFT?"
            options={[
                "A) A 500 Rupee Note",
                "B) A Concert Ticket to Seat A4",
                "C) A Gold Coin"
            ]}
            correctIndex={1}
            explanation="Seat A4 is unique. Even if Seat A5 is the same price, it's a DIFFERENT seat. That uniqueness makes it 'Non-Fungible'."
        />
    );
}
