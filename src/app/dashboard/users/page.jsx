import React from "react";
import styles from "./users.module.css";
import Search from "@/components/Dashboard/Search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Dashboard/Pagination/Pagination";
import { fetchUsers } from "@/lib/data";

// Taking my modified query from search component to search users in the users page using searchParams to get the query
const UsersPage = async ({ searchParams }) => {
  // #2 creating an instance of the query the ? means only when the query is available and then the query is passed into fetchUsers function
  const q = searchParams?.q || "";

  // #3 instanceof the query for pagination show if particular page query is available otherwise render first page and this instance of the query which is page is also passed into fetchUsers function.
  const page = searchParams?.page || 1;

  // #1 fetchUsers is a function in data.js file to fetch user detail and total number of users from db
  const { count, users } = await fetchUsers(q, page);

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
            <td>CreatedAt</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* Using fetchUsers function mapping the results into table body in all required td and Link component  */}
          {users && users.map((user) => (
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
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
