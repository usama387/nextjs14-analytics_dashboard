import React from 'react';
import styles from "./login.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>LOGIN</h1>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage;