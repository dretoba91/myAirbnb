import React, { useState } from "react";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

// destructuring props from App.js as parameter for SearchBar
function SearchBar({
  filteredBnbList,
  locationFiltered,
  setLocationFiltered,
  setDataArray,
  totalGuest,
  setTotalGuest,
}) {
  // 1. create a state to check the input tag on focus between the loction or guest.
  const [inputOnFocus, setInputOnFocus] = useState("");

  // 2. create a state for the search dropdown when to open and close.
  const [showSearch, setShowSearch] = useState(false);

  // 2a. make a condition for when the search drodown should open and close.
  const searchDropdown = showSearch ? "openDropdown" : "closeDropdown";

  // 2b. create function to open and close the search dropdown
  const openSearch = () => {
    setShowSearch(true);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };

  //3. when dropdown is open, show search dropdown header
  const searchDropdownHeader = showSearch && (
    <div className={searchDropdownHeader}>
      <div className="searchDropdownIcon" onClick={closeSearch}>
        <AiFillCloseCircle />
      </div>
    </div>
  );

  // 4. create a state for the Guest filter (both adult and child), to count the number of guest.
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // 5a. create an event handler for search button
  //the onclick event handler will toggle the search button and also send filtered list to the CardDisplay component through the dataArray props.
  const handleSearchButton = (e) => {
    setTotalGuest(adultCount + childCount);
    setDataArray(filteredBnbList);
    if (showSearch) {
      setShowSearch(!showSearch);
    }
  };

  // 5b.

  return (
    <div className={styles.searchbar}>
      <div className={styles.inputBar}>
        <LocationSearch />
      </div>
      <div className={styles.inputBar}>
        <GuestSearch />
      </div>
      <div className={styles.iconSearch}>
        <FaSearch className={styles.fasearch} />
      </div>
    </div>
  );
}

export default SearchBar;
