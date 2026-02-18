"use client";

import { SlideLayout } from "./SlideLayout";
import { Users } from "lucide-react";

export function Slide11_Activity() {
    return (
        <SlideLayout title="The Paper Blockchain Activity">
            <div className="flex flex-col items-center gap-12 max-w-4xl">
                <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center border-4 border-primary animate-pulse">
                    <Users className="w-24 h-24 text-primary" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    I Need 3 Volunteers!
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
                    <div className="bg-card/50 p-6 rounded-xl border border-border text-center">
                        <h3 className="text-2xl font-bold mb-2 text-blue-400">Volunteer 1</h3>
                        <p className="text-muted-foreground">The Spender</p>
                    </div>
                    <div className="bg-card/50 p-6 rounded-xl border border-border text-center">
                        <h3 className="text-2xl font-bold mb-2 text-purple-400">Volunteer 2</h3>
                        <p className="text-muted-foreground">The Miner (CPU)</p>
                    </div>
                    <div className="bg-card/50 p-6 rounded-xl border border-border text-center">
                        <h3 className="text-2xl font-bold mb-2 text-green-400">Volunteer 3</h3>
                        <p className="text-muted-foreground">The Ledger (Network)</p>
                    </div>
                </div>

                <p className="text-xl text-muted-foreground italic mt-8">
                    "Let's build a blockchain manually to see how it really works."
                </p>
            </div>
        </SlideLayout>
    );
}
