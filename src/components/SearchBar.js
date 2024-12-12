import React from "react";
import { useDispatch } from "react-redux";
import { updateSearchQuery } from "../redux/taskSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(updateSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search tasks..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
