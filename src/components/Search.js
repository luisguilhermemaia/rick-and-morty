import React from "react";
import { Input } from "reactstrap";

const Search = ({ onChange }) => (
  <Input
    onChange={onChange}
    type="text"
    placeholder="Enter character name..."
  />
);

export default Search;
