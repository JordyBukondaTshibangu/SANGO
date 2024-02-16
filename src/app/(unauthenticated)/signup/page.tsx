"use client";
import React, { useState } from "react";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SignupImg from "../../../../public/assets/Undraw/login.svg";
import UserAccount from "@/components/auth/UserAccount";
import CompanyAccount from "@/components/auth/CompanyAccount";

const SignUpPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="w-full flex-1 flex flex-col gap-20 px-5 xl:px-10 py-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-light text-black">Sango</h1>
            <p>Create an account</p>
          </div>
          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Create a user account" {...a11yProps(0)} />
              <Tab label="Create a company account" {...a11yProps(1)} />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
              <UserAccount />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <CompanyAccount />
            </CustomTabPanel>
          </div>
        </div>
      </div>
      <div className="hidden flex-1 lg:flex items-center justify-center bg-lightGray rounded-tr-2xl rounded-br-2xl">
        <Image src={SignupImg} width={300} height={300} alt="" />
      </div>
    </div>
  );
};

export default SignUpPage;
