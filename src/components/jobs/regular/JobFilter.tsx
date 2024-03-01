"use client";
import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { FaBriefcase } from "react-icons/fa";
import Link from "next/link";
import { Anchor } from "../Jobs";

type JobFilterProps = {
  searchJob: (value: string) => void;
  searchLocation: (value: string) => void;
};

const JobFilter: React.FC<JobFilterProps> = ({ searchJob, searchLocation }) => {
  const handleSearchJob = (event: ChangeEvent<HTMLInputElement>) =>
    searchJob(event.target.value);
  const handleSearchLocation = (event: ChangeEvent<HTMLInputElement>) =>
    searchLocation(event.target.value);

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-5">
      <Link
        href="/jobs/create-job"
        className=" bg-white  dark:bg-darkHeader w-full lg:w-48 h-12 lg:h-14 rounded-lg cursor-pointer flex justify-center items-center gap-3 text-xl text-lightFont dark:text-white border dark:border-none border-solid border-grayThird"
      >
        <span className="text-xl font-bold">+</span>
        <span className="text-sm lg:text-lg font-medium leading-none">
          Create a Job
        </span>
      </Link>
      <span className="w-full flex-1 relative text-grayFirst">
        <SearchIcon className="absolute top-4 right-4 text-2xl text-primary" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="w-full h-full bg-white dark:bg-darkHeader border dark:border-none border-solid border-grayThird outline-none text-lightFontColor dark:text-fontColor"
          placeholder="Search by : Job title, Keyword..."
          onChange={handleSearchJob}
        />
      </span>
      <span className="w-full flex-1 relative">
        <FmdGoodOutlinedIcon className="absolute top-4 right-4 text-2xl text-primary" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="w-full h-full bg-white dark:bg-darkHeader border dark:border-none border-solid border-grayThird outline-none text-lightFontColor dark:text-fontColor"
          placeholder="City, State or zip code"
          onChange={handleSearchLocation}
        />
      </span>
      <div className="hidden lg:flex gap-4 self-end">
        <Button className="bg-primary hover:bg-secondary w-32 lg:w-48 h-12 lg:h-14 rounded-lg cursor-pointer flex justify-center items-center gap-3 text-xl text-white">
          <FaBriefcase className="text-lg font-bold" />
          <span className="text-sm lg:text-lg font-medium">Find a Job</span>
        </Button>
      </div>
    </div>
  );
};

export default JobFilter;
