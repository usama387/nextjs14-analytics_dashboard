import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";


// #1 This a layout page for dashboard which has different routes and therefore side and navbar will be visible on every page in all routes of dashboard
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
