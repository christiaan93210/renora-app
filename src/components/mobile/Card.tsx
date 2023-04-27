import { tokenList } from "../../constants/tokenList";

const Card = (props: CardProps) => {
  return (
    <div className="w-[320px] p-7 border border-[#202835] rounded-xl text-right text-[17px] mr-2 shadow-md bg-[#0c1119]">
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={tokenList[props.asset.cryptoIndex].icon}
            alt="token"
            className="w-[40px] h-[40px] mr-5"
          />
          <div>
            <h2 className="text-left">
              {tokenList[props.asset.cryptoIndex].name}
            </h2>
            <h2 className="text-[#88c0f3] text-[15px]">
              {props.asset.accType}
            </h2>
          </div>
        </div>
        <div>
          <h2>
            {props.asset.amount} {tokenList[props.asset.cryptoIndex].name}
          </h2>
          <h2 className="text-[#88c0f3] text-[15px]">
            {props.asset.amountUSD} USD
          </h2>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="text-[#6c86ad] font-mono">Realized P&L</h2>
        <div>
          <h2>{props.asset.realized} USD</h2>
          <h2 className="text-[#88c0f3] text-[15px]">
            {props.asset.realizedPercent}%
          </h2>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="text-[#6c86ad] font-mono">Unrealized P&L</h2>
        <div>
          <h2>{props.asset.unrealized} USD</h2>
          <h2 className="text-[#88c0f3] text-[15px]">
            {props.asset.unrealizedPercent}%
          </h2>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="text-[#6c86ad] font-mono">
          <b>Total P&L</b>
        </h2>
        <div>
          <h2>{props.asset.total} USD</h2>
          <h2 className="text-[#88c0f3] text-[15px]">
            {props.asset.totalPercent}%
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
