import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PostsManagement from "./pages/PostsManagement";
import Settings from "./pages/Settings";
import "./App.css";
import "antd/dist/reset.css";
import ColumnChart from "./components/Dashboard/ColumnChart"; // Thêm component Subscription
import LineChart from "./components/Dashboard/LineChart"; // Thêm component Revenue
function App() {
  return (
    <div className="admin-container">
      <nav className="sidebar">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/posts-management">Posts Management</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts-management" element={<PostsManagement />} />
          <Route path="/settings" element={<Settings />} />
          {/* <Route path="/dashboard/subscription" element={<LineChart />} /> Thêm route cho Subscription */}
          {/* <Route path="/dashboard/revenue" element={<ColumnChart />} /> Thêm route cho Revenue */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
