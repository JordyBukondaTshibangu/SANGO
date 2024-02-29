import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LoginImg from "../../../../public/assets/Undraw/Signup.svg";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex">
      <div className="w-full flex-1 flex flex-col gap-20 px-5 xl:px-10 py-10 xl:py-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-light text-primary">Sango</h1>
          <p>Login into your account</p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <label htmlFor="Email">Email address</label>
            <div className="w-full flex">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="w-full rounded-r-0 bg-white text-grayFirst h-full"
              />
              <span className="flex items-center justify-center w-14 h-full bg-primary rounded-tr-md rounded-br-md">
                <EmailIcon className="text-white" />
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="Password">Password</label>
            <div className="w-full flex">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                className="w-full rounded-r-0 bg-white text-grayFirst"
              />
              <span className="flex items-center justify-center w-14 h-full bg-primary rounded-tr-md rounded-br-md">
                <LockIcon className="text-white" />
              </span>
            </div>
          </div>
          <p className="w-full text-end underline">Forgot password?</p>
        </div>
        <div className="flex flex-col gap-8">
          <Button
            variant="contained"
            className="bg-primary py-3 hover:bg-primary"
          >
            Login now
          </Button>
          <Link href="/sign-up">
            <Button
              variant="outlined"
              className="w-full border-primary text-primary py-3 hover:border-primary"
            >
              Signup now
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden flex-1 lg:flex items-center justify-center  bg-white  dark:bg-darkHeader rounded-tr-2xl rounded-br-2xl">
        <Image src={LoginImg} width={300} height={300} alt="" />
      </div>
    </div>
  );
};

export default SignInPage;
