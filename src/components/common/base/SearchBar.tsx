import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar: React.FC = () => (
  <div className="flex w-80 h-10">
    <input
      type="text"
      className="w-full h-full rounded-tl-md rounded-bl-md px-5 py-2 text-black"
      placeholder="Search..."
    />
    <span className="flex items-center justify-center w-20 h-full cursor-pointer bg-dark shadow-sm hover:bg-primary rounded-tr-md rounded-br-md">
      <SearchIcon />
    </span>
  </div>
);

export default SearchBar;
