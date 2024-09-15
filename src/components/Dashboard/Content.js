import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import LineChart from "../Dashboard/LineChart";
import ColumnChart from "../Dashboard/ColumnChart";

const Content = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/dashboard/subscription" && <LineChart />}
      {location.pathname === "/dashboard/revenue" && <ColumnChart />}
    </div>
  );
};
export default Content;
