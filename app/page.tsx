"use client";

import { Deck } from "@/components/Deck";
import { Slide1_Title } from "@/components/slides/Slide1_Title";
import { Slide2_HandsUp } from "@/components/slides/Slide2_HandsUp";
import { Slide3_FactOrCap } from "@/components/slides/Slide3_FactOrCap";

import { Slide4_MythMoney } from "@/components/slides/Slide4_MythMoney";
import { Slide5_MythCriminal } from "@/components/slides/Slide5_MythCriminal";
import { Slide6_MythRichKid } from "@/components/slides/Slide6_MythRichKid";
import { Slide7_MythEnvironment } from "@/components/slides/Slide7_MythEnvironment";
import { Slide8_MythDatabase } from "@/components/slides/Slide8_MythDatabase";

import { Slide9_GoogleDocs } from "@/components/slides/Slide9_GoogleDocs";
import { Slide10_HashDemo } from "@/components/slides/Slide10_HashDemo";
import { Slide11_Activity } from "@/components/slides/Slide11_Activity";

import { Slide12_QuizKey } from "@/components/slides/Slide12_QuizKey";
import { Slide13_QuizContract } from "@/components/slides/Slide13_QuizContract";

import { Slide14_SupplyChain } from "@/components/slides/Slide14_SupplyChain";
import { Slide15_Identity } from "@/components/slides/Slide15_Identity";
import { Slide16_DeFi } from "@/components/slides/Slide16_DeFi";

import { Slide17_QuizAnon } from "@/components/slides/Slide17_QuizAnon";
import { Slide18_QuizGas } from "@/components/slides/Slide18_QuizGas";

import { Slide19_Roadmap } from "@/components/slides/Slide19_Roadmap";
import { Slide20_Homework } from "@/components/slides/Slide20_Homework";
import { Slide21_QnA } from "@/components/slides/Slide21_QnA";

// New Content
import { Slide_Decentralization } from "@/components/slides/Slide_Decentralization";
import { Slide_MythHacking } from "@/components/slides/Slide_MythHacking";
import { Slide_Consensus } from "@/components/slides/Slide_Consensus";
import { Slide_QuizConsensus } from "@/components/slides/Slide_QuizConsensus";
import { Slide_Wallets } from "@/components/slides/Slide_Wallets";
import { Slide_Tokens } from "@/components/slides/Slide_Tokens";
import { Slide_QuizTokens } from "@/components/slides/Slide_QuizTokens";
import { Slide_DAO } from "@/components/slides/Slide_DAO";

// Refinement Phase
import { Slide_Def_Ledger } from "@/components/slides/Slide_Def_Ledger";
import { Slide_Def_Protocol } from "@/components/slides/Slide_Def_Protocol";
import { Slide_Def_Block } from "@/components/slides/Slide_Def_Block";

export default function Home() {
    const slides = [
        <Slide1_Title key="slide1" />,
        <Slide2_HandsUp key="slide2" />,
        <Slide3_FactOrCap key="slide3" />,
        <Slide4_MythMoney key="slide4" />,
        <Slide5_MythCriminal key="slide5" />,
        <Slide6_MythRichKid key="slide6" />,
        <Slide_Decentralization key="slide_decentralization" />,
        <Slide7_MythEnvironment key="slide7" />,
        <Slide8_MythDatabase key="slide8" />,
        <Slide_MythHacking key="slide_mythhacking" />,
        <Slide9_GoogleDocs key="slide9" />,
        <Slide_Def_Ledger key="slide_def_ledger" />,
        <Slide_Def_Protocol key="slide_def_protocol" />,
        <Slide_Def_Block key="slide_def_block" />,
        <Slide10_HashDemo key="slide10" />,
        <Slide11_Activity key="slide11" />,
        <Slide_Consensus key="slide_consensus" />,
        <Slide_QuizConsensus key="slide_quizconsensus" />,
        <Slide12_QuizKey key="slide12" />,
        <Slide_Wallets key="slide_wallets" />,
        <Slide13_QuizContract key="slide13" />,
        <Slide14_SupplyChain key="slide14" />,
        <Slide15_Identity key="slide15" />,
        <Slide_DAO key="slide_dao" />,
        <Slide16_DeFi key="slide16" />,
        <Slide_Tokens key="slide_tokens" />,
        <Slide_QuizTokens key="slide_quiztokens" />,
        <Slide17_QuizAnon key="slide17" />,
        <Slide18_QuizGas key="slide18" />,
        <Slide19_Roadmap key="slide19" />,
        <Slide20_Homework key="slide20" />,
        <Slide21_QnA key="slide21" />,
    ];

    return (
        <main>
            <Deck slides={slides} />
        </main>
    );
}