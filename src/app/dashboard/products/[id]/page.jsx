import React from "react";
import styles from "./singleproduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="user-image" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="pro max" />
          <label>Price</label>
          <input type="number" name="price" placeholder="500 Pkr" />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="red" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="text">Tech</option>
            <option value="computers">Computers</option>
          </select>
          <textarea type="text" id="desc" rows="10" placeholder="description" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
