import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ColumnChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const data = {
      labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      datasets: [
        {
          label: "Values",
          data: [20, 40, 60, 80, 50, 30, 90, 70],
          backgroundColor: [
            "#8884d8",
            "#83a6ed",
            "#8dd1e1",
            "#ff7300", // Màu cho cột cao nhất
            "#ffc658",
            "#ff0000", // Màu cho cột thấp nhất
            "#82ca9d",
            "#d0ed57",
          ],
        },
      ],
    };
    setChartData(data);
  }, []); // Chỉ chạy một lần khi component mount

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Simple Column Chart with Index Labels",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <div style={{ maxWidth: "500px", height: "400px" }}>{chartData.labels ? <Bar data={chartData} options={options} /> : <p>Loading...</p>}</div>;
};

export default ColumnChart;
