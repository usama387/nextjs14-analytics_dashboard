import React from "react";
import styles from "./singleuser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="user-image" fill />
        </div>
        Usama Razaaq
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Usama Razaaq" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Usama Razaaq" />
          <label>Password</label>
          <input type="password" name="username"/>
          <input type="text" name="phone" placeholder="+12345678" />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            placeholder="Full Stack Developer"
          />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
