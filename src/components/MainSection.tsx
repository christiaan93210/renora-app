import React from "react";
import SyncBtn from "./SyncBtn";
import WebCard from "./WebCard";

export type Card = {
  cryptoIndex: number;
  accType: String;
  amount: number;
  amountUSD: number;
  realized: number;
  realizedPercent: number;
  unrealized: number;
  unrealizedPercent: number;
  total: number;
  totalPercent: number;
};

let cards: Card[] = [
  {
    cryptoIndex: 1,
    accType: "Sub account",
    amount: 1000,
    amountUSD: 100000,
    realized: 1000,
    realizedPercent: 12,
    unrealized: 1000,
    unrealizedPercent: 13,
    total: 1000,
    totalPercent: 20,
  },
  {
    cryptoIndex: 1,
    accType: "Sub account",
    amount: 1000,
    amountUSD: 100000,
    realized: 1000,
    realizedPercent: 12,
    unrealized: 1000,
    unrealizedPercent: 13,
    total: 1000,
    totalPercent: 20,
  },
  {
    cryptoIndex: 1,
    accType: "Sub account",
    amount: 1000,
    amountUSD: 100000,
    realized: 1000,
    realizedPercent: 12,
    unrealized: 1000,
    unrealizedPercent: 13,
    total: 1000,
    totalPercent: 20,
  },
  {
    cryptoIndex: 1,
    accType: "Sub account",
    amount: 1000,
    amountUSD: 100000,
    realized: 1000,
    realizedPercent: 12,
    unrealized: 1000,
    unrealizedPercent: 13,
    total: 1000,
    totalPercent: 20,
  },
  {
    cryptoIndex: 1,
    accType: "Sub account",
    amount: 1000,
    amountUSD: 100000,
    realized: 1000,
    realizedPercent: 12,
    unrealized: 1000,
    unrealizedPercent: 13,
    total: 1000,
    totalPercent: 20,
  },
];

const MainSection = () => {
  return (
    <div className="p-5">
      <div className="flex flex-row-reverse border-b-2 border-[#202835]">
        <SyncBtn />
      </div>
      <div className="mt-2 font-mono">
        <div className="flex text-[#6c86ad]">
          <span className="grow-5">Asset</span>
          <span className="grow">Amount</span>
          <span className="grow">Realized P&L</span>
          <span className="grow">Unrealized P&L</span>
          <span className="grow">Total P&L</span>
        </div>
        {cards.map((card, index) => (
          <WebCard card={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
