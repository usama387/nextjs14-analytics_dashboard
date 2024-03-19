import React from "react";
import styles from "./Transactions.module.css";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        {/* table head represents titles */}
        <thead className={styles.tablehead}>
          <tr>
            <td>USER</td>
            <td>NAME</td>
            <td>STATUS</td>
            <td>DATE</td>
            <td>AMOUNT</td>
          </tr>
        </thead>
        {/* tbody represents table body */}
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user avatar"
                  width={40}
                  height={40}
                  className={styles.userAvatar}
                />
              </div>
            </td>
            <td>Usama Razaaq</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>18-03-2024</td>
            <td>5000 pkr</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user avatar"
                  width={40}
                  height={40}
                  className={styles.userAvatar}
                />
              </div>
            </td>
            <td>Usama Razaaq</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Pending</span>
            </td>
            <td>18-03-2024</td>
            <td>5000 pkr</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user avatar"
                  width={40}
                  height={40}
                  className={styles.userAvatar}
                />
              </div>
            </td>
            <td>Usama Razaaq</td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Pending
              </span>
            </td>
            <td>18-03-2024</td>
            <td>5000 pkr</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
