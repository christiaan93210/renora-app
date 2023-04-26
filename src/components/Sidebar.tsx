import React from "react";
// import * as echarts from "echarts";

// type EChartsOption = echarts.EChartsOption;

// let chartDom = document.getElementById("chart")!;
// let myChart = echarts.init(chartDom);
// let option: EChartsOption;

// option = {
//   series: [
//     {
//       type: 'treemap',
//       data: [
//         {
//           name: 'nodeA', // First tree
//           value: 10,
//           children: [
//             {
//               name: 'nodeAa', // First leaf of first tree
//               value: 4
//             },
//             {
//               name: 'nodeAb', // Second leaf of first tree
//               value: 6
//             }
//           ]
//         },
//         {
//           name: 'nodeB', // Second tree
//           value: 20,
//           children: [
//             {
//               name: 'nodeBa', // Son of first tree
//               value: 20,
//               children: [
//                 {
//                   name: 'nodeBa1', // Granson of first tree
//                   value: 20
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

// myChart.setOption(option);

const Sidebar = () => {
  return (
    <div className="">
      <div id="chart"></div>
    </div>
  );
};

export default Sidebar;
