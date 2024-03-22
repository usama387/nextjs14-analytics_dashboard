import React from "react";
import styles from "./singleuser.module.css";
import Image from "next/image";
import { fetchSingleUser } from "@/lib/data";
import { updateUser } from "@/lib/actions";

// here params help accessing single user id
const SingleUserPage = async ({ params }) => {
  // the id is being being destructured from params
  const { id } = params;

  // this id and then passed to this function in data js file which then fetches data of the user taking this id
  const user = await fetchSingleUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="user-image" fill />
        </div>
        {user.username}
      </div>

      {/* now the user is fetched i am gonna update it now */}
      <div className={styles.formContainer}>
        {/* the updateUser is a server action to update user in the db */}
        <form className={styles.form} action={updateUser}>
          {/* the destructured id is also passed here */}
          <input type="hidden" name="id" value={user._id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="username" />
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
