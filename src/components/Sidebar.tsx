import React from "react";
import ReactEcharts from "echarts-for-react";

let option = {
  series: [
    {
      type: "treemap",
      data: [
        {
          name: "BTC",
          value: 10,
        },
        {
          name: "BNB",
          value: 20,
        },
        {
          name: "ETH",
          value: 20,
        },
        {
          name: "SOL",
          value: 70,
        }
      ],
      breadcrumb: "false",
    },
  ],
};

const Sidebar = () => {
  return (
    <div className="border-l-2 border-[#202835] bg-[#13182387] w-[450px] p-5 tracking-wider">
      <div className="mx-[auto]">
        <ReactEcharts option={option} style={{ width: 420, height: 420 }} />
      </div>
      <div className="flex flex-col gap-2 ml-[45px]">
        <div>
          <h2 className="text-[18px]">Net worth</h2>
          <h2 className="text-[#88c0f3]">10,512 USD</h2>
        </div>
        <div>
          <h2 className="text-[18px]">Realized returns</h2>
          <h2 className="text-[#88c0f3]">10,512 USD</h2>
        </div>
        <div>
          <h2 className="text-[18px]">Unrealized returns</h2>
          <h2 className="text-[#88c0f3]">10,512 USD</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
