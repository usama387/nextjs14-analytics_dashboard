"use client";
import React from "react";
import { MdSearch } from "react-icons/md";
import styles from "./Search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {useDebouncedCallback} from "use-debounce"

// #2 This component is client side rendered and being used in 2 pages of dashboard in products of searching product and in users page for searching user and to implement this functionality i will be using next navigation instead of react useState and useEffect

const Search = ({ placeholder }) => {
  // #1 The first hook takes determines current url
  const pathname = usePathname();

  //#2 The second hook passes query into url after the url to perform search
  const searchParams = useSearchParams();

  // #3 To manage or change url using a method
  const { replace } = useRouter();

  // #4 Creating onChange function with debounce library to hold search until user finishes typing and searches after 300 meli seconds and to prevent reloading and implement query search functionality
  const handleSearch = useDebouncedCallback ((e) => {
    // Create a new URLSearchParams object to manipulate query parameters
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      // Update the 'q' parameter with the value from the input field if the search value is more than 2 characters long otherwise it might be expensive
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    // Replace the current URL with the updated query parameters
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
