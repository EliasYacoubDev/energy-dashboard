import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const linkClass = (path) =>
    `cursor-pointer block hover:text-white ${
      location.pathname === path ? "text-white font-bold" : "text-gray-300"
    }`;
  return (
    <div className="h-screen w-64 bg-[#0D1325] text-white p-6 fixed left-0 top-0 shadow-xl">
      <h1 className="text-xl font-bold mb-8">Energy Dashboard</h1>
      <ul className="space-y-4 text-gray-300">
        <li>
          <Link to="/" className={linkClass("/")}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/analytics" className={linkClass("/analytics")}>
            Analytics
          </Link>
        </li>
        <li>
          <Link to="/settings" className={linkClass("/settings")}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
