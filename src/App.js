import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PostsManagement from "./pages/PostsManagement";
import Settings from "./pages/Settings";
import "./App.css";
import "antd/dist/reset.css";
import NotFound from "./components/NotFound";

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
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/posts-management" element={<PostsManagement />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} /> Route cho NotFound
        </Routes>
      </div>
    </div>
  );
}

export default App;
