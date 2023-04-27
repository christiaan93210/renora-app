import ReactEcharts from "echarts-for-react";

import { useSelector, shallowEqual } from "react-redux";

import { tokenList } from "../.././constants/tokenList";

const Chart = () => {
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

  let option = {
    series: [
      {
        type: "treemap",
        data: data,
        breadcrumb: false,
        silent: true,
        roam: false,
        nodeClick: false,
      },
    ],
  };
  return (
    <div className="w-[100%] border border-[#202835] tracking-wider pb-8 mb-10 rounded-xl bg-[#0c1119]">
      <div className="mx-[auto]">
        <ReactEcharts option={option} style={{ width: "100%" }} />
      </div>
      <div className="flex flex-col gap-2 ml-[45px]">
        <div>
          <h2 className="text-[18px]">
            <b>Net worth</b>
          </h2>
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

export default Chart;
