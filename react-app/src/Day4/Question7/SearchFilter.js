import React, { useState } from "react";

const SearchFilter = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <ul>
        {filteredData.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
