import React from "react";
import styles from "./add.module.css";

// addUser is a server action being used in this form to create a user user
import { addUser } from "@/lib/actions";

const AddUsersPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" name="username" placeholder="username" required />
        <input type="email" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input type="number" name="phone" placeholder="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>IsAdmin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>IsActive?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="Address"
          id="desc"
          rows="10"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUsersPage;
