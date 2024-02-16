"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { FaBriefcase } from "react-icons/fa";

type JobFilterProps = {
  searchJob: (value: string) => void;
  searchLocation: (value: string) => void;
  showFilters: (value: boolean) => void;
};

const JobFilter: React.FC<JobFilterProps> = ({
  searchJob,
  searchLocation,
  showFilters,
}) => {
  const [displayFilters, setDisplayFilters] = useState<boolean>(false);

  const handleSearchJob = (event: React.ChangeEvent<HTMLInputElement>) =>
    searchJob(event.target.value);
  const handleSearchLocation = (event: React.ChangeEvent<HTMLInputElement>) =>
    searchLocation(event.target.value);
  const handleDisplayFilter = (event: React.MouseEvent<HTMLElement>) => {
    setDisplayFilters(!displayFilters);
    showFilters(displayFilters);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-5">
      <span className="w-full flex-1 relative">
        <SearchIcon className="absolute top-4 right-4 text-2xl text-primary" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="w-full h-full"
          placeholder="Search by : Job title, Position, Keyword..."
          onChange={handleSearchJob}
        />
      </span>
      <span className="w-full flex-1 relative">
        <FmdGoodOutlinedIcon className="absolute top-4 right-4 text-2xl text-primary" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="w-full h-full"
          placeholder="City, State or zip code"
          onChange={handleSearchLocation}
        />
      </span>
      <div className="flex gap-4 self-end">
        <Button
          className="bg-graySecond w-32 lg:w-48 h-12 lg:h-14 rounded-lg cursor-pointer flex justify-center items-center gap-4 text-xl text-white"
          onClick={handleDisplayFilter}
        >
          <TuneOutlinedIcon className="text-xl font-bold" />
          <span className="text-sm lg:text-lg font-medium">Filters</span>
        </Button>
        <Button className="bg-primary w-32 lg:w-48 h-12 lg:h-14 rounded-lg cursor-pointer flex justify-center items-center gap-3 text-xl text-white">
          <FaBriefcase className="text-lg font-bold" />
          <span className="text-sm lg:text-lg font-medium">Find a Job</span>
        </Button>
      </div>
    </div>
  );
};

export default JobFilter;
