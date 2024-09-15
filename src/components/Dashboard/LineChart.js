import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Đăng ký các thành phần Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  // Dữ liệu cho biểu đồ
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Tháng
    datasets: [
      {
        label: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33], // Nhiệt độ cao
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointRadius: 5,
      },
      {
        label: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13], // Nhiệt độ thấp
        borderColor: "rgba(75, 75, 75, 1)",
        backgroundColor: "rgba(75, 75, 75, 0.2)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "rgba(75, 75, 75, 1)",
        pointRadius: 5,
      },
    ],
  };

  // Cấu hình cho biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Average High & Low Temperature",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 5, // Cài đặt giá trị min cho trục Y
        max: 40, // Cài đặt giá trị max cho trục Y
        title: {
          display: true,
          text: "Temperature",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: "500px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
