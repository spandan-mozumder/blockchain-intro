"use client";

import { QuizCard } from "./QuizCard";

export function Slide18_QuizGas() {
    return (
        <QuizCard
            question="What is a 'Gas Fee'?"
            options={[
                "A) Money for fuel for the internet cables.",
                "B) A subscription fee to use Ethereum.",
                "C) A fee paid to the network computers to process your transaction."
            ]}
            correctIndex={2}
            explanation="Think of it like Uber Surge Pricing. If the network is busy, you pay more to cut the line and get processed faster."
        />
    );
}
