"use client";

import { QuizCard } from "./QuizCard";

export function Slide_QuizConsensus() {
    return (
        <QuizCard
            question="Why did Ethereum switch to Proof of Stake?"
            options={[
                "A) Because Vitalik lost a bet.",
                "B) To reduce energy consumption by ~99.9%.",
                "C) To make the network slower."
            ]}
            correctIndex={1}
            explanation="Proof of Stake removes the need for millions of GPUs crunching math, making it as green as a standard server."
        />
    );
}
