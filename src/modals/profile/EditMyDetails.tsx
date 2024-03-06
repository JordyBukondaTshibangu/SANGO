// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react/no-unescaped-entities */
"use client";
import React, { ChangeEvent, useState } from "react";
import { styled } from "@mui/material/styles";

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

type EditMyDetailsProps = {
  onClose: () => void;
};
const EditMyDetails: React.FC<EditMyDetailsProps> = ({ onClose }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleUpdateMyDetails = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <form
      className="flex flex-col gap-12 py-4"
      onSubmit={handleUpdateMyDetails}
    >
      <h2 className="text-xl font-medium">My Details </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            name="firstName"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={firstName}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFirstName(event.target.value);
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            name="lastName"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={lastName}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setLastName(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
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
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="position">Position*</label>
          <input
            type="text"
            name="position"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={position}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPosition(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input
            type="text"
            name="phoneNumber"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={phoneNumber}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="address">Address*</label>
          <textarea
            name="address"
            rows={10}
            cols={5}
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader px-3 py-5"
            value={address}
            required
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end border-t border-solid border-grayFour dark:border-dark py-4">
        <button
          type="submit"
          className="w-56 h-12  bg-primary dark:bg-dark text-white dark:text-grayFirst border-2border-grayFour dark:border-dark border-solid rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition duration-300 ease-in-out"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default EditMyDetails;
