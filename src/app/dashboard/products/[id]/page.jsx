import React from "react";
import styles from "./singleproduct.module.css";
import Image from "next/image";
import { fetchSingleProduct } from "@/lib/data";
import { updateProduct } from "@/lib/actions";

// params help access id which i need to update
const SingleProductPage = async ({ params }) => {
  // destructuring id from params
  const { id } = params;

  // now passing the id inside this function to be fetched
  const product = await fetchSingleProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noproduct.jpg"} alt="user-image" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price}/>
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock}/>
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color}/>
          <label>Size</label>
          <input type="text" name="size" placeholder={product.size}/>
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="text">Tech</option>
            <option value="computers">Computers</option>
          </select>
          <textarea type="text" id="desc" rows="10" placeholder={product.dec} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
