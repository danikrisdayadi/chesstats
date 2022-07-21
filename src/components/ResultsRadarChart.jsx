import { Radar } from "react-chartjs-2";
import * as utils from "../utils/utils";

function ResultsRadarChart({
  users,
  stats = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
}) {
  const chartLabels = ["Current", "Highest", "Win %", "Total Games", "Tactics"];

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: `${users[0]?.username},${stats[2]}`,
        data: stats[0],
        backgroundColor: utils.chartGreenBg,
        borderColor: utils.chartGreen,
        borderWidth: 1,
      },
      {
        label: `${users[1]?.username},${stats[3]}`,
        data: stats[1],
        backgroundColor: utils.chartRedBg,
        borderColor: utils.chartRed,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          generateLabels: function (chart) {
            var data = chart.data;
            var legends = Array.isArray(data.datasets)
              ? data.datasets.map(function (dataset, i) {
                  return {
                    text: dataset.label.split(",")[0],
                    fillStyle: !Array.isArray(dataset.backgroundColor)
                      ? dataset.backgroundColor
                      : dataset.backgroundColor[0],
                    hidden: !chart.isDatasetVisible(i),
                    lineCap: dataset.borderCapStyle,
                    lineDash: dataset.borderDash,
                    lineDashOffset: dataset.borderDashOffset,
                    lineJoin: dataset.borderJoinStyle,
                    lineWidth: dataset.borderWidth,
                    strokeStyle: dataset.borderColor,
                    pointStyle: dataset.pointStyle,
                    datasetIndex: i,
                  };
                }, this)
              : [];
            return legends;
          },
        },
      },
      tooltip: {
        callbacks: {
          label: context => {
            const dataset = context.dataset.label.split(",");
            const labelIndex = chartLabels.indexOf(context.label);
            return `${dataset[0]}: ${dataset[labelIndex + 1]}`;
          },
        },
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
