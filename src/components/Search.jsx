import React, { useState } from "react";
import "./search.css";
import arrow from "../assets/icon-arrow.svg";
import loading from "../assets/8-dots-rotate.svg";

function Search({ handleSearch, errorMessage, btnDisable }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue);
    setInputValue("");
  };
  return (
    <div className="search">
      <div className="search-from">
        <h1>IP Address Tracker</h1>
        {errorMessage && <p>IP address not found! Try Again Later Please.</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for any IP address  "
          />
          <button type="submit" disabled={btnDisable}>
            <img
              src={btnDisable ? loading : arrow}
              alt={btnDisable ? "SVG loading" : "SVG arrow"}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
