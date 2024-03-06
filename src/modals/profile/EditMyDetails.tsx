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
  firstname: string;
  lastname: string;
  position: string;
  company: string;
  birthday: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phoneNumber: string;
};
const EditMyDetails: React.FC<EditMyDetailsProps> = ({
  onClose,
  firstname,
  lastname,
  position,
  company,
  phoneNumber,
}) => {
  const [updatedFirstName, setFirstName] = useState<string>(firstname);
  const [updatedLastName, setLastName] = useState<string>(lastname);
  const [updatedCompany, setCompany] = useState<string>(company);
  const [updatedPosition, setPosition] = useState<string>(position);
  const [updatedPhoneNumber, setPhoneNumber] = useState<string>(phoneNumber);
  const [updatedAddress, setAddress] = useState<string>("");

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
          <label htmlFor="updatedFirstName">First Name*</label>
          <input
            type="text"
            name="updatedFirstName"
            className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={updatedFirstName}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFirstName(event.target.value);
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="updatedLastName">Last Name*</label>
          <input
            type="text"
            name="updatedLastName"
            className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={updatedLastName}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setLastName(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="updatedCompany">Company*</label>
          <input
            type="text"
            name="updatedCompany"
            className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={updatedCompany}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setCompany(event.target.value);
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="updatedPosition">Position*</label>
          <input
            type="text"
            name="updatedPosition"
            className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={updatedPosition}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPosition(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="updatedPhoneNumber">Phone Number*</label>
          <input
            type="text"
            name="updatedPhoneNumber"
            className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={updatedPhoneNumber}
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
          <label htmlFor="updatedAddress">Address*</label>
          <textarea
            name="updatedAddress"
            rows={10}
            cols={5}
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader px-3 py-5"
            value={updatedAddress}
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
