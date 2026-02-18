"use client";

import { QuizCard } from "./QuizCard";

export function Slide12_QuizKey() {
    return (
        <QuizCard
            question="If I lose my Private Key (Seed Phrase), who can recover it for me?"
            options={[
                "A) Google Support and the IT Department",
                "B) The Police or Cyber Cell",
                "C) Spandan or the Developer",
                "D) Absolutely Nobody"
            ]}
            correctIndex={3}
            explanation="With great power comes great responsibility. You are your own bank. If you lose the key, the money is gone forever."
        />
    );
}
