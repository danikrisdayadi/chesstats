import { Bar } from "react-chartjs-2";
import * as utils from "../utils/utils";

function ResultsBarChart({ stats }) {
  const barOptions = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      x: {
        min: -1,
        max: 1,
      },
      y: {
        stacked: true,
      },
    },
  };

  const barData = {
    labels: [1, 2],
    datasets: [
      {
        type: "bar",
        label: "Bar Dataset",
        data: stats[0],
        borderColor: utils.chartGreen,
        backgroundColor: utils.chartGreenBg,
      },
      {
        type: "bar",
        label: "Bar Dataset",
        data: stats[1],
        borderColor: utils.chartRed,
        backgroundColor: utils.chartRedBg,
      },
    ],
  };
  return <Bar options={barOptions} data={barData} />;
}

export default ResultsBarChart;
