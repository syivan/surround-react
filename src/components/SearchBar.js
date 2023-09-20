import React, { useState } from "react";

function SearchBar({ handleSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          id="searchbar"
          type="text"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
