import { tokenList } from "../.././constants/tokenList";

const WebCard = (props: CardProps) => {
  return (
    <tr className="text-right p-5">
      <td className="flex items-center text-left p-4">
        <img
          src={tokenList[props.asset.cryptoIndex].icon}
          alt="token"
          className="w-[40px] h-[40px] mr-5"
        />
        <div>
          <h2>{tokenList[props.asset.cryptoIndex].name}</h2>
          <h2 className="text-[#88c0f3] text-[17px]">{props.asset.accType}</h2>
        </div>
      </td>
      <td>
        <h2>
          {props.asset.amount} {tokenList[props.asset.cryptoIndex].name}
        </h2>
        <h2 className="text-[#88c0f3] text-[17px]">
          {props.asset.amountUSD} USD
        </h2>
      </td>
      <td>
        <h2>{props.asset.realized} USD</h2>
        <h2 className="text-[#88c0f3] text-[17px]">
          {props.asset.realizedPercent}%
        </h2>
      </td>
      <td>
        <h2>{props.asset.unrealized} USD</h2>
        <h2 className="text-[#88c0f3] text-[17px]">
          {props.asset.unrealizedPercent}%
        </h2>
      </td>
      <td>
        <h2>{props.asset.total} USD</h2>
        <h2 className="text-[#88c0f3] text-[17px]">
          {props.asset.totalPercent}%
        </h2>
      </td>
    </tr>
  );
};

export default WebCard;
