import React from "react";
import ReactEcharts from "echarts-for-react";

import { useSelector, shallowEqual } from "react-redux";

import { tokenList } from ".././constants/tokenList";
 
const Sidebar = () => {
  let sumAssets: ISumAsset = useSelector(
    (state: AssetsState) => state.sumAssets,
    shallowEqual
  );

  let assets: IAsset[] = useSelector(
    (state: AssetsState) => state.assets,
    shallowEqual
  );

  let data: MapItem[] = assets.map((asset) => ({
    name: tokenList[asset.cryptoIndex].name,
    value: asset.amount,
  }));

  console.log(data);

  let option = {
    series: [
      {
        type: "treemap",
        data: data,
        breadcrumb: "false",
      },
    ],
  };

  console.log("option>", option);

  return (
    <div className="border-l-2 border-[#202835] bg-[#13182387] w-[450px] p-5 tracking-wider">
      <div className="mx-[auto]">
        <ReactEcharts option={option} style={{ width: 420, height: 420 }} />
      </div>
      <div className="flex flex-col gap-2 ml-[45px]">
        <div>
          <h2 className="text-[18px]">Net worth</h2>
          <h2 className="text-[#88c0f3]">{sumAssets.netWorth} USD</h2>
        </div>
        <div>
          <h2 className="text-[18px]">Realized returns</h2>
          <h2 className="text-[#88c0f3]">{sumAssets.realizedReturns} USD</h2>
        </div>
        <div>
          <h2 className="text-[18px]">Unrealized returns</h2>
          <h2 className="text-[#88c0f3]">{sumAssets.unrealizedReturns} USD</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
