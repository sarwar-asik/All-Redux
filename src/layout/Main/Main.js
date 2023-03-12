import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className='px-10'>
      <Navbar />
      <Outlet />
      <Toaster/>
    </div>
  );
};

export default Main;
