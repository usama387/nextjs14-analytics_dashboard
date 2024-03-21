"use client";
import React from "react";
import styles from "./Pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  // #1 searchParams hook
  const searchParams = useSearchParams();

  // #2 replacing query hook
  const { replace } = useRouter();

  // #3 pathname hook for determining path
  const pathname = usePathname();

  // #4 page rendering
  const page = searchParams.get("page") || 1;

  // #5 creating a new searchParams
  const params = new URLSearchParams(searchParams);

  // #6 users on each page
  const USER_PER_PAGE = 2;

  // #7 Two variables condition to allow a button to be clicked
  const hasPrev = USER_PER_PAGE * parseInt(page - 1) > 0;
  const hasNext = USER_PER_PAGE * parseInt(page - 1) + USER_PER_PAGE < count;

  // #8 Function to handle onClick
  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
