import React from "react";
import Card from "@/components/Dashboard/Card/Card";
import styles from "./dashboard.module.css";
import Rightbar from "@/components/Dashboard/Rightbar/Rightbar";
import Transactions from "@/components/Dashboard/Transactions/Transactions";
import Chart from "@/components/Dashboard/Chart/Chart";

// The dashboard folder has 2 common components in its layout file but now here in its root page i have a card comp being used 3 times then rightbar & transactions and chart component to be shown dashboard root page  
const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
