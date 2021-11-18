import React from "react";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <div className={styles.inputBar}>
        <LocationSearch />
      </div>
      <div className={styles.inputBar}>
        <GuestSearch />
      </div>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
