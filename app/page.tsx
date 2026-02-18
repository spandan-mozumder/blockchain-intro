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



import { Slide14_SupplyChain } from "@/components/slides/Slide14_SupplyChain";
import { Slide15_Identity } from "@/components/slides/Slide15_Identity";
import { Slide16_DeFi } from "@/components/slides/Slide16_DeFi";



import { Slide19_Roadmap } from "@/components/slides/Slide19_Roadmap";
import { Slide20_Homework } from "@/components/slides/Slide20_Homework";
import { Slide21_QnA } from "@/components/slides/Slide21_QnA";

// New Content
import { Slide_Decentralization } from "@/components/slides/Slide_Decentralization";
import { Slide_MythHacking } from "@/components/slides/Slide_MythHacking";
import { Slide_Consensus } from "@/components/slides/Slide_Consensus";
import { Slide_Wallets } from "@/components/slides/Slide_Wallets";
import { Slide_Tokens } from "@/components/slides/Slide_Tokens";
import { Slide_DAO } from "@/components/slides/Slide_DAO";

// Refinement Phase
import { Slide_Def_Ledger } from "@/components/slides/Slide_Def_Ledger";
import { Slide_Def_Protocol } from "@/components/slides/Slide_Def_Protocol";
import { Slide_Def_Block } from "@/components/slides/Slide_Def_Block";

import { Slide_MythNFT } from "@/components/slides/Slide_MythNFT";
import { Slide_MythDelete } from "@/components/slides/Slide_MythDelete";

import { Slide_History } from "@/components/slides/Slide_History";
import { Slide_BitcoinBasics } from "@/components/slides/Slide_BitcoinBasics";
import { Slide_EthereumBasics } from "@/components/slides/Slide_EthereumBasics";
import { Slide_SolanaBasics } from "@/components/slides/Slide_SolanaBasics";
import { Slide_ChainComparison } from "@/components/slides/Slide_ChainComparison";
import { Slide_BlocksAndTx } from "@/components/slides/Slide_BlocksAndTx";
import { Slide_ConsensusMech } from "@/components/slides/Slide_ConsensusMech";
import { Slide_DoubleSpend } from "@/components/slides/Slide_DoubleSpend";
import { Slide_Hashing } from "@/components/slides/Slide_Hashing";
import { Slide_Keys } from "@/components/slides/Slide_Keys";

export default function Home() {
    const slides = [
        <Slide1_Title key="slide1" />,
        <Slide2_HandsUp key="slide2" />,
        <Slide3_FactOrCap key="slide3" />,
        <Slide4_MythMoney key="slide4" />,
        <Slide5_MythCriminal key="slide5" />,
        <Slide6_MythRichKid key="slide6" />,
        <Slide_MythNFT key="slide_mythnft" />,
        <Slide_MythDelete key="slide_mythdelete" />,

        <Slide_History key="slide_history" />,
        <Slide_BitcoinBasics key="slide_bitcoin" />,
        <Slide_EthereumBasics key="slide_ethereum" />,
        <Slide_SolanaBasics key="slide_solana" />,
        <Slide_ChainComparison key="slide_comparison" />,

        <Slide_Decentralization key="slide_decentralization" />,
        <Slide7_MythEnvironment key="slide7" />,
        <Slide8_MythDatabase key="slide8" />,
        <Slide_MythHacking key="slide_mythhacking" />,
        <Slide9_GoogleDocs key="slide9" />,
        <Slide_Def_Ledger key="slide_def_ledger" />,
        <Slide_Def_Protocol key="slide_def_protocol" />,
        <Slide_Def_Block key="slide_def_block" />,

        <Slide_DoubleSpend key="slide_doublespend" />,
        <Slide_Hashing key="slide_hashing" />,
        <Slide10_HashDemo key="slide10" />,
        <Slide_BlocksAndTx key="slide_blocks_tx" />,

        <Slide11_Activity key="slide11" />,
        <Slide_ConsensusMech key="slide_consensus_mech" />,
        <Slide_Wallets key="slide_wallets" />,
        <Slide_Keys key="slide_keys" />,
        <Slide14_SupplyChain key="slide14" />,
        <Slide15_Identity key="slide15" />,
        <Slide_DAO key="slide_dao" />,
        <Slide16_DeFi key="slide16" />,
        <Slide_Tokens key="slide_tokens" />,
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