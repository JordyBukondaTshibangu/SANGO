"use client";
import React, { useState } from "react";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { UserT } from "../container/UsersList";
import Avatar from "../../../../public/assets/Avatar.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CustomTabPanel from "./CustomTabPanel";
import InfoPanel from "./InfoPanel";
import ExperiencePanel from "./ExperiencePanel";
import SkillPanel from "./SkillPanel";
import Link from "next/link";

type UserCardProps = {
  user: UserT;
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [value, setValue] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <div className="w-full  bg-white  dark:bg-darkHeader rounded-lg flex flex-col gap-5 items-center py-10 px-5">
      <div className="flex justify-center items-center rounded-full w-20 h-20">
        <Image
          src={user.profile ? user.profile : Avatar}
          width={200}
          height={200}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 items-center  py-4">
        <h4 className="text-lg font-medium text-center">
          {user.firstName} {user.lastName}
        </h4>
        <div className="flex flex-col items-center gap-4">
          <p className="text-center">{user.position}</p>
          <div className="flex text-lightFontColor dark:text-fontColor gap-5">
            <a href="/facebook.com">
              <FacebookOutlinedIcon className="flex items-center gap-4 text-lg rounded-full" />
            </a>
            <a href="/instagram.com">
              <InstagramIcon className="flex items-center gap-4 text-lg rounded-full" />
            </a>
            <a href="/twitter.com">
              <TwitterIcon className="flex items-center gap-4 text-lg rounded-full" />
            </a>
            <a href="/twitter.com">
              <LinkedInIcon className="flex items-center gap-4 text-lg rounded-full" />
            </a>
          </div>
        </div>
      </div>
      <Link
        href={`/users/${user.id}`}
        className="flex items-center justify-center py-1 px-4  bg-light dark:bg-dark rounded-md text-sm hover:bg-primary transition duration-300 hover:text-white"
      >
        View Profile
      </Link>
      <div onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <div className="flex justify-center gap-5 items-center cursor-pointer">
            <p>Show less</p>
            <KeyboardArrowUpIcon className="text-lg" />
          </div>
        ) : (
          <div className="flex justify-center gap-5 items-center cursor-pointer">
            <p>Show more</p>
            <KeyboardArrowDownIcon className="text-lg" />
          </div>
        )}
      </div>
      {showMore && (
        <div>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Info" {...a11yProps(0)} className="text-lightFontColor dark:text-grayFirst"/>
            <Tab label="Experience" {...a11yProps(1)}  className="text-lightFontColor dark:text-grayFirst"/>
            <Tab label="Skills" {...a11yProps(2)}  className="text-lightFontColor dark:text-grayFirst"/>
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <InfoPanel
              bio={user.bio}
              email={user.email}
              phoneNumber={user.phoneNumber}
              address={user.address}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <ExperiencePanel experiences={user.experience} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <SkillPanel skills={user.skills} />
          </CustomTabPanel>
        </div>
      )}
    </div>
  );
};

export default UserCard;
