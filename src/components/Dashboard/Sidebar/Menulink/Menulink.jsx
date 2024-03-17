"use client";
import React from "react";
import styles from "./Menulink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menulink = ({ item }) => {
  const pathname = usePathname();
  return (
    // The link has dynamic styling one default but on current url or hover it applies active css
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default Menulink;
