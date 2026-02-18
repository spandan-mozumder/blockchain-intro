"use client";

import { MythCard } from "./MythCard";

export function Slide_MythDelete() {
    return (
        <MythCard
            mythNumber={6}
            title="The Eraser Myth"
            statement="If I make a mistake on the blockchain, I can just delete it or undo it."
            verdict="CAP"
            realityPoints={[
                "Blockchain is immutable (unchangeable).",
                "Once data is added, it stays there forever.",
                "You can only add new data to correct old data."
            ]}
            analogy="It's like writing with a permanent marker on a glass wall. You can't erase it, you can only write a note next to it saying 'oops'."
        />
    );
}
