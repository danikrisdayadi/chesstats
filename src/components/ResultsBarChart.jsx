import { Bar } from "react-chartjs-2";
import * as utils from "../utils/utils";

function ResultsBarChart({ label, stats }) {
  const barOptions = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        min: -1,
        max: 1,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: context => context.dataset.label,
        },
      },
    },
  };

  const barData = {
    labels: [label],
    datasets: [
      {
        type: "bar",
        label: stats[0] > stats[1] ? stats[2] : stats[3],
        data: stats[0] > stats[1] ? [-stats[0]] : [stats[1]],
        borderColor: utils.chartGreen,
        backgroundColor: utils.chartGreenBg,
      },
      {
        type: "bar",
        label: stats[0] > stats[1] ? stats[3] : stats[2],
        data: stats[0] > stats[1] ? [stats[1]] : [-stats[0]],
        borderColor: utils.chartGrey,
        backgroundColor: utils.chartGreyBg,
      },
    ],
  };
  return <Bar options={barOptions} data={barData} />;
}

export default ResultsBarChart;
