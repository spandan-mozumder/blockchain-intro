"use client";

import { QuizCard } from "./QuizCard";

export function Slide13_QuizContract() {
    return (
        <QuizCard
            question="What is a 'Smart Contract'?"
            options={[
                "A) A legal document signed by lawyers",
                "B) Code that runs automatically when conditions are met",
                "C) A contract that uses AI to negotiate"
            ]}
            correctIndex={1}
            explanation="Think of it like a Vending Machine. You put coin in -> Drink comes out. No shopkeeper needed to verify the transaction."
        />
    );
}
