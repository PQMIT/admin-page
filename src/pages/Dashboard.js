import React, { useState } from "react";
import LineChart from "../components/Dashboard/LineChart";
import ColumnChart from "../components/Dashboard/ColumnChart";
import { Button } from "antd";
const Dashboard = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>
      <Button onClick={() => setPage(1)}>Subcription</Button>
      <Button onClick={() => setPage(2)}>Revenue</Button>
      {page === 1 ? <LineChart /> : <ColumnChart />}
    </div>
  );
};

export default Dashboard;
