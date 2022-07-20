import { Radar } from "react-chartjs-2";
import * as utils from "../utils/utils";

function ResultsRadarChart({
  users,
  stats = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
}) {
  console.log(users);
  const data = {
    labels: ["Current", "Highest", "W/L", "Total Games", "Tactics"],
    datasets: [
      {
        label: users[0]?.username,
        data: stats[0],
        backgroundColor: utils.chartRedBg,
        borderColor: utils.chartRed,
        borderWidth: 1,
      },
      {
        label: users[1]?.username,
        data: stats[1],
        backgroundColor: utils.chartGreenBg,
        borderColor: utils.chartGreen,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      r: {
        ticks: {
          color: "rgba(0, 0, 0, 0)",
          backdropColor: "rgba(0, 0, 0, 0)",
          maxTicksLimit: 8,
        },
        min: 0,
        max: 1,
      },
    },
  };

  return <Radar data={data} options={options} />;
}

export default ResultsRadarChart;
