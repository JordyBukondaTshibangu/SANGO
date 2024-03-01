"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar: React.FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  return (
    <div
      className="w-80 h-12 cursor-pointer hidden lg:flex items-center justify-center border border-solid border-grayFour dark:border-dark"
      onClick={() => setShowInput(!showInput)}
    >
        <input
          type="text"
          className="w-full h-full rounded-tl-md rounded-bl-md px-5 py-2 dark:bg-dark outline-none"
          placeholder="Search..."
        />
      <span
        className="flex items-center justify-center w-14 h-full cursor-pointer bg-light dark:bg-darkHeader hover:bg-primary shadow-sm rounded-br-md rounded-tr-md  transition duration-500 ease-in-out  text-xl hover:text-white"
      >
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchBar;
