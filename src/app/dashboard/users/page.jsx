import React from "react";
import styles from "./users.module.css";
import Search from "@/components/Dashboard/Search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Dashboard/Pagination/Pagination";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* Search Component */}
        <Search placeholder="search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        {/* thead represents titles of the table */}
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Createdat</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user-avatar"
                  width={40}
                  height={40}
                  className={styles.userAvatar}
                />
                Mr Ahad Abro
              </div>
            </td>
            <td>ahad@gmail.com</td>
            <td>19-03-2024</td>
            <td>user</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"/"}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Pagination Component */}
      <Pagination />
    </div>
  );
};

export default UsersPage;
