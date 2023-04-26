import { number } from "echarts";
import React from "react";
import type { Card } from "./MainSection";

type CardProps = {
  card: Card;
};

const WebCard = (props: CardProps) => {
  return (
    <div className="flex items-center">
      <div>
        <h2>{props.card.amount}</h2>
        <h2>{props.card.amountUSD}</h2>
      </div>
      <div>
        <h2>{props.card.realized}</h2>
        <h2>{props.card.realizedPercent}</h2>
      </div>
      <div>
        <h2>{props.card.unrealized}</h2>
        <h2>{props.card.unrealizedPercent}</h2>
      </div>
      <div>
        <h2>{props.card.total}</h2>
        <h2>{props.card.totalPercent}</h2>
      </div>
    </div>
  );
};

export default WebCard;
