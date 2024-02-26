/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ContactImg from "../../../../../public/assets/Undraw/contact.svg";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-48 xl:px-10">
      <div className="flex flex-col items-center gap-20">
        <h1 className="text-4xl">GET IN TOUCH </h1>
        <div className="flex flex-col lg:flex-row gap-14">
          <div className=" text-center flex-1">
            <div className="flex flex-col gap-3 items-center">
              <span className="rounded-full p-5 w-fit bg-darkHeader flex items-center justify-center hover:bg-primary cursor-pointer transition duration-500 ease-in-out">
                <LocationOnIcon className="text-5xl" />
              </span>
              <span className="text-2xl uppercase font-bold my-5">ADDRESS</span>
            </div>
            <p>87 Park Road Wynberg, 7800 Cape Town South Africa</p>
          </div>
          <div className=" text-center flex-1">
            <div className="flex flex-col gap-3 items-center">
              <span className="rounded-full p-5 w-fit bg-darkHeader flex items-center justify-center hover:bg-primary cursor-pointer transition duration-500 ease-in-out">
                <LocalPhoneIcon className="text-5xl" />
              </span>
              <span className="text-2xl uppercase font-bold my-5">Home</span>
            </div>
            <p>+27 68 286 6579</p>
          </div>
          <div className=" text-center flex-1">
            <div className="flex flex-col gap-3 items-center">
              <span className="rounded-full p-5 w-fit bg-darkHeader flex items-center justify-center hover:bg-primary cursor-pointer transition duration-500 ease-in-out">
                <EmailIcon className="text-5xl" />
              </span>
              <span className="text-2xl uppercase font-bold my-5">Email</span>
            </div>
            <p>jordytshibss@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col gap-6 lg:px-5 lg:w-3/5">
          <h1 className="text-4xl">Message Us</h1>
          <p className="w-3/4">
            Welcome to Sango, the world's largest professional network with more
            than 1 billion members in more than 200 countries and territories
            worldwide.
          </p>
          <div className="flex items-center w-full my-10">
            <Image src={ContactImg} width={400} height={400} alt="" />
          </div>
        </div>
        <div className="flex-1 px-5 p-10 bg-darkHeader text-white rounded-lg shadow-md">
          <Box
            component="form"
            noValidate
            autoComplete="on"
            className="flex flex-col gap-8 py-2"
          >
            <h1 className="text-2xl text-grayFirst">Leave us a Message </h1>
            <div className="flex items-center gap-5 !text-white">
              <TextField
                id="outlined-basic"
                label="First name"
                variant="outlined"
                className="w-full !text-white"
              />
              <TextField
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                className="w-full text-white"
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              className="w-full text-white"
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={6}
              defaultValue="Default Value"
              className="text-grayFirst"
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
