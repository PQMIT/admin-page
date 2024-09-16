import React from "react";
import LineChart from "../components/Dashboard/LineChart";
import ColumnChart from "../components/Dashboard/ColumnChart";
import { Button } from "antd";
import { BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const renderContent = () => {
    switch (location.pathname) {
      case "/dashboard/subscription":
        return <LineChart />;
      case "/dashboard/revenue":
        return <ColumnChart />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>
      <Button onClick={() => navigate("/dashboard/subscription")}>Subscription</Button>
      <Button onClick={() => navigate("/dashboard/revenue")}>Revenue</Button>

      <div style={{ marginTop: "20px" }}>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
