import { Radar } from "react-chartjs-2";

function ResultsRadarChart({ usernames, stats }) {
  const data = {
    labels: [
      "Current Rating",
      "Highest Rating",
      "W/L Percentage  ",
      "Total Games",
      "Tactics Rating",
    ],
    datasets: [
      {
        label: usernames[0],
        data: stats[0],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: usernames[1],
        data: stats[1],
        backgroundColor: "rgba(173, 193, 120, 0.2)",
        borderColor: "rgba(173, 193, 120, 1)",
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
