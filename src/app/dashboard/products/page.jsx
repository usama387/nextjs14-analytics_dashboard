import React from "react";
import Search from "@/components/Dashboard/Search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Dashboard/Pagination/Pagination";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* Search Component */}
        <Search placeholder="search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        {/* thead represents titles of the table */}
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Createdat</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="user-avatar"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                IPhone 15 pro
              </div>
            </td>
            <td>Desc</td>
            <td>40,000</td>
            <td>19-03-2024</td>
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

export default ProductsPage;
