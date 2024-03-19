import React from "react";
import Navbar from "@/components/Dashboard/Navbar/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import styles from "./dashboard.module.css";
import Footer from "@/components/Dashboard/Footer/Footer";

// #1 This a layout page for dashboard which has different routes and therefore side and navbar will be visible on every page in all routes of dashboard
const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
