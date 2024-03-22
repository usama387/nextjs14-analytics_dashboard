import React from "react";
import Search from "@/components/Dashboard/Search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Dashboard/Pagination/Pagination";
import styles from "./products.module.css";
import { fetchProducts } from "@/lib/data";
import { deleteProduct } from "@/lib/actions";

// Taking my modified query from search component to search users in the users page using searchParams to get the query

const ProductsPage = async ({ searchParams }) => {
  // Extracting the 'q' parameter from searchParams, defaulting to an empty string if not present
  const q = searchParams?.q || "";

  // Extracting the 'page' parameter from searchParams, defaulting to 1 if not present.
  const page = searchParams?.page || 1;

  // fetchProducts is a function to fetch products and their count from db
  const { count, products } = await fetchProducts(q, page);

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
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt="user-avatar"
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}PKR</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>

                  {/* This form invokes a server action to delete product from
                  products page */}
                  <form action={deleteProduct}>
                    {/* this product id is being destructured through form data in server action to delete a product */}
                    <input type="hidden" name="id" value={product._id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                  
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

export default ProductsPage;
