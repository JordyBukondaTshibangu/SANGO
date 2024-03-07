
"use client";
import React, { ChangeEvent, useState } from "react";
import CountrySelect from "./CountrySelect";


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
  const [updatedStreet, setStreet] = useState<string>("");
  const [updatedCity, setCity] = useState<string>("");
  const [updatedState, setState] = useState<string>("");
  const [updatedZipCode, setZipCode] = useState<string>("");
  const [updatedCountry, setCountry] = useState<string>("");

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
        <div className="flex-1 flex flex-col gap-4">
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
        <div className="flex-1 flex flex-col gap-4">
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
        <div className="flex-1 flex flex-col gap-4">
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
        <div className="flex-1 flex flex-col gap-4">
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
        <div className="flex-1 flex flex-col gap-4">
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
        <div className="flex-1 flex flex-col gap-4"></div>
      </div>
      <div className="flex flex-col justify-between gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex-1 flex flex-col gap-4">
            <CountrySelect />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <label htmlFor="updateState">State</label>
            <input
              type="text"
              name="updateState"
              className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
              value={updatedState}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setState(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1 flex flex-col gap-4">
            <label htmlFor="updateCity">City</label>
            <input
              type="text"
              name="updateCity"
              className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
              value={updatedCity}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setCity(event.target.value);
              }}
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <label htmlFor="updatedZipCode">Zip code</label>
            <input
              type="text"
              name="updatedZipCode"
              className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
              value={updatedZipCode}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setZipCode(event.target.value);
              }}
            />
          </div>
        </div>
                <div className="flex-1 flex flex-col gap-4">
          <label htmlFor="updateStreet">Street</label>
          <input
            type="text"
            name="updateStreet"
            className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
            value={updatedStreet}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPhoneNumber(event.target.value);
            }}
          />
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
