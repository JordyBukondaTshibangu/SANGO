"use client";
import React, { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export type JobDetailsT = {
  title: string;
  company: string;
  period: string;
  category: string;
  salary: string;
  logo: string | null;
  location: string;
};
type NewJobDetailInfoProps = {
  addJobDetails: (jobDetails: JobDetailsT) => void;
};

const NewJobDetailInfo: React.FC<NewJobDetailInfoProps> = ({
  addJobDetails,
}) => {
  const [title, setTitle] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleJobDetails = () =>
    addJobDetails({
      title,
      company,
      period,
      category,
      salary,
      logo,
      location,
    });

  return (
    <div className=" bg-white  dark:bg-darkHeader px-5 lg:px-10 py-10 pb-14 rounded-lg flex flex-col gap-10">
      <h2 className="text-xl font-medium">Job Details </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="title">Title*</label>
          <input
            type="text"
            name="title"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={title}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
              handleJobDetails();
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="company">Company*</label>
          <input
            type="text"
            name="company"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={company}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setCompany(event.target.value);
              handleJobDetails();
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="period">Period</label>
          <select
            name="period"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-12 px-2"
            defaultValue={period}
            required
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {
              setPeriod(event.target.value);
              handleJobDetails();
            }}
          >
            <option value="internship">Internship</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="category">Category*</label>
          <input
            type="text"
            name="category"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={category}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setCategory(event.target.value);
              handleJobDetails();
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="salary">Salary*</label>
          <input
            type="text"
            name="salary"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={salary}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSalary(event.target.value);
              handleJobDetails();
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor="company">Company logo*</label>
          <Button
            component="label"
            className="w-fit flex justify-center items-cente"
            startIcon={<ImageOutlinedIcon className="!text-[45px]" />}
          >
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="location">Location*</label>
          <input
            type="text"
            name="location"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={location}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setLocation(event.target.value);
              handleJobDetails();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewJobDetailInfo;
