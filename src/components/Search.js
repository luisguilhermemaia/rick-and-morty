import React from "react";

const Search = ({ onChange }) => (
  <input
    type="text"
    onChange={onChange}
    placeholder="Enter character name..."
  />
);

export default Search;
