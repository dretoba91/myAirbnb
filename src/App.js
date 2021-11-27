import React, { useState } from "react";
import "./App.css";
import Bnblogo from "./component/Bnblogo";
import SearchBar from "./component/SearchBar";
import BnbInfo from "./component/BnbInfo.json";

function App() {
  // 1. create state to filter the data and show only the ones matching the user search.
  const [locationFiltered, setLocationFiltered] = useState("");
  const [totalGuest, setTotalGuest] = useState(0);

  // 2. create a State for the data filtering that is condition to seacrch button when clicked.
  const [dataArray, setDataArray] = useState(BnbInfo);

  // 3. need to format user search for (, and " ") using regex.
  const re = /\s*,\s*/;
  const result = locationFiltered.includes(",")
    ? locationFiltered.trim().split(re)
    : locationFiltered.trim().replace(/\s\s+/g).split(" ");
  console.log(result);

  // 4. create a new array of the filtered object from the JSON array using the filtered user search
  const filteredBnbList = BnbInfo.filter((data) => {
    if (totalGuest <= data.maxGuests) {
      if (result.length <= 1) {
        if (locationFiltered === "") {
          return data;
        } else if (
          data.city.toLowerCase().includes(result[0].toLowerCase()) ||
          data.country.toLowerCase().includes(result[0].toLowerCase())
        ) {
          return data;
        }
      } else if (result.length > 1) {
        if (locationFiltered === "") {
          return data;
        } else if (
          data.city.toLowerCase().includes(result[0].toLowerCase()) &&
          data.country.toLowerCase().includes(result[1].toLowerCase())
        ) {
          return data;
        } else if (
          data.city.toLowerCase().includes(result[1].toLowerCase()) &&
          data.country.toLowerCase().includes(result[0].toLowerCase())
        ) {
          return data;
        }
      }
    }
    return false;
  });

  return (
    <div className="App">
      <div className="App-header">
        <Bnblogo />
        <SearchBar
          filteredBnbList={filteredBnbList}
          locationFiltered={locationFiltered}
          setLocationFiltered={setLocationFiltered}
          setDataArray={setDataArray}
          totalGuest={totalGuest}
          setTotalGuest={setTotalGuest}
        />
      </div>
    </div>
  );
}

export default App;
