import React from "react";
import styles from "./add.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="title" placeholder="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="tech">Tech</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" name="price" placeholder="price" />
        <input type="number" name="stock" placeholder="stock" />
        <input type="text" name="color" placeholder="color" />
        <input type="text" name="size" placeholder="size" />
        <textarea
          name="desc"
          id="desc"
          rows="10"
          placeholder="product details"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
