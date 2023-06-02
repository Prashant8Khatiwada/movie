import React, { useState } from "react";
import "./search.css";
const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <header>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search"
          id="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Search;
