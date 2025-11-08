import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

function EnergyChart({ data }) {
  const formattedTimes = data.times
    .slice(0, 24)
    .map((t) =>
      new Date(t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  const chartConfig = {
    labels: formattedTimes,
    datasets: [
      {
        label: "Energy (kWh)",
        data: data.values.slice(0, 24),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.3,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Energy (kWh)",
          font: {
            size: 14,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Hour",
          font: {
            size: 14,
          },
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="w-full h-[300px]">
      <Line data={chartConfig} options={options} />
    </div>
  );
}

export default EnergyChart;
