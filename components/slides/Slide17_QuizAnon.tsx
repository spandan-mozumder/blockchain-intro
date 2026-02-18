"use client";

import { QuizCard } from "./QuizCard";

export function Slide17_QuizAnon() {
    return (
        <QuizCard
            question="Is Blockchain 'Anonymous'?"
            options={[
                "A) Yes, 100% secret. CIA can't find me.",
                "B) No, it is Pseudonymous (Public but masked).",
                "C) Depends on the weather."
            ]}
            correctIndex={1}
            explanation="Anyone can see your wallet address and exactly how much money you have. They just don't know your NAME... yet."
        />
    );
}
