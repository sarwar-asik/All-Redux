import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Main/Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  // console.log("dashbbbbord");
  return (
    <div className="grid grid-cols-12 p-3 gap-3 ">
      <Navbar />
      <Sidebar />
      <div className="col-span-10 w-full bg-gray-100 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
