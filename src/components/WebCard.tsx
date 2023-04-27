import React from "react";

import { tokenList } from ".././constants/tokenList";

type CardProps = {
  card: Card;
};

const WebCard = (props: CardProps) => {
  return (
    <tr className="text-right p-5">
      <td className="flex items-center text-left p-4">
        <img
          src={tokenList[props.card.cryptoIndex].icon}
          alt="token"
          className="w-[40px] h-[40px] mr-5"
        />
        <div>
          <h2>{tokenList[props.card.cryptoIndex].name}</h2>
          <h2 className="text-[#88c0f3] text-[17px]">{props.card.accType}</h2>
        </div>
      </td>
      <td>
        <h2>
          {props.card.amount} {tokenList[props.card.cryptoIndex].name}
        </h2>
        <h2 className="text-[#88c0f3] text-[17px]">
          {props.card.amountUSD} USD
        </h2>
      </td>
      <td>
        <h2>{props.card.realized} USD</h2>
        <h2 className="text-[#88c0f3] text-[17px]">
          {props.card.realizedPercent}%
        </h2>
      </td>
      <td>
        <h2>{props.card.unrealized} USD</h2>
        <h2 className="text-[#88c0f3] text-[17px]">
          {props.card.unrealizedPercent}%
        </h2>
      </td>
      <td>
        <h2>{props.card.total} USD</h2>
        <h2 className="text-[#88c0f3] text-[17px]">
          {props.card.totalPercent}%
        </h2>
      </td>
    </tr>
  );
};

export default WebCard;
