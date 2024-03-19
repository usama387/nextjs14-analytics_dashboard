import React from "react";
import styles from "./Righbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      {/* First Card */}
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="image" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            How does dashboard improves the management of business insights
          </h3>
          <span className={styles.subtitle}>
            Generate insights within minutes
          </span>
          <p className={styles.desc}>
            Admin dashboards typically allow administrators to manage user
            accounts, including creating, editing, and deleting accounts,
            resetting passwords, and assigning roles or permissions to users.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      {/* Second Card */}
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>Coming Soon</span>
          <h3 className={styles.title}>
            How does dashboard improves the management of business insights
          </h3>
          <span className={styles.subtitle}>
            Generate insights within minutes
          </span>
          <p className={styles.desc}>
            Admin dashboards typically allow administrators to manage user
            accounts, including creating, editing, and deleting accounts,
            resetting passwords, and assigning roles or permissions to users.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
