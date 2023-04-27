import React from "react";
import SyncBtn from "./SyncBtn";
import WebCard from "./WebCard";

import { useSelector, shallowEqual } from "react-redux";

const MainSection = () => {
  let assets: IAsset[] = useSelector(
    (state: AssetsState) => state.assets,
    shallowEqual
  );

  return (
    <div className="p-5 w-[60%]">
      <div className="flex flex-row-reverse border-b-2 border-[#202835]">
        <SyncBtn />
      </div>
      <div className="mt-3">
        <table className="w-[100%] p-3 border-separate">
          <tbody>
            <tr className="text-[#6c86ad] font-mono text-right">
              <th className="text-left pl-10">Asset</th>
              <th>Amount</th>
              <th>Realized P&L</th>
              <th>Unrealized P&L</th>
              <th>Total P&L</th>
            </tr>
            {assets.map((asset, index) => (
              <WebCard card={asset} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainSection;
