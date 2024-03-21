import React from "react";
import styles from "./users.module.css";
import Search from "@/components/Dashboard/Search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Dashboard/Pagination/Pagination";
import { fetchUsers } from "@/lib/data";

const UsersPage = async () => {
  // fetchUsers is a function in data.js file to fetch user detail from db
  const users = await fetchUsers();
  
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
          {/* Using fetchUsers function mapping the results into table body in all required td and Link component  */}
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt="user-avatar"
                    width={40}
                    height={40}
                    className={styles.userAvatar}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "admin" : "user"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  {/* Dynamic route to navigate on single page */}
                  <Link href={`/dashboard/users/${user.id}`}>
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
          ))}
        </tbody>
      </table>
      {/* Pagination Component */}
      <Pagination />
    </div>
  );
};

export default UsersPage;
