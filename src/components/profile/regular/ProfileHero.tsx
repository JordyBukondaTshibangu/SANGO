"use client";
import React, { useState } from "react";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "../../../../public/assets/Avatar.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RoomIcon from "@mui/icons-material/Room";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

type ProfileHeroProps = {
  profile: string;
  firstname: string;
  lastname: string;
  position: string;
  email: string;
  birthday: string;
  gender: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phoneNumber: string;
};

const ProfileHero: React.FC<ProfileHeroProps> = ({
  profile,
  firstname,
  lastname,
  position,
  email,
  birthday,
  address,
  phoneNumber,
}) => {
  const [viewMoreDetails, setViewMore] = useState<boolean>(true);
  const userAddress = `${address.street} ${address.city} ${address.state} ${address.country}`;
  const heroImg =
    "https://images.unsplash.com/photo-1674027444454-97b822a997b6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="bg-darkHeader w-full rounded-lg pb-5">
      <div
        className="relative bg-cover bg-no-repeat  flex flex-col  gap-5 md:gap-10 p-5 lg:p-10 justify-end min-h-[300px] rounded-tr-lg rounded-tl-lg"
        style={{ backgroundImage: `url(${profile ? profile : heroImg})` }}
      ></div>
      <div className="relative flex flex-col gap-5 px-5 lg:px-10 pb-5 ">
        <div className="self-center lg:self-start relative w-48 h-48 rounded-full p-1 bg-darkHeader -mt-24">
          <Image
            src={profile ? profile : Avatar}
            width={200}
            height={200}
            alt="profile"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-between">
          <h4 className="text-2xl font-bold">
            {firstname} {lastname}
          </h4>
          <h5 className="lg:text-lg lg:self-end">500 Network parteners</h5>
        </div>
        <div className="flex items-center gap-2">
          <EmailIcon className="text-lg lg:text-xl" />
          <h5 className="text-lg lg:text-xl">{email}</h5>
        </div>
        <h5 className="lg:text-lg">{position}</h5>
      </div>
      <div
        className="flex lg:hidden items-center"
        onClick={() => setViewMore(!viewMoreDetails)}
      >
        <span className="px-5 py-2">
          {" "}
          {viewMoreDetails ? "View Less" : "View More"}
        </span>
        <RemoveRedEyeOutlinedIcon className="text-lg" />
      </div>
      {viewMoreDetails && (
        <div className="flex flex-col gap-5 px-5 lg:px-10 py-5 lg:pb-5">
          <div className="flex items-center gap-2">
            <CalendarMonthIcon className="text-lg lg:text-xl" />
            <h5 className="text-md lg:text-lg">{birthday}</h5>
          </div>
          <div className="flex items-center gap-2">
            <LocalPhoneIcon className="text-lg lg:text-xl" />
            <h5 className="text-md lg:text-lg">{phoneNumber}</h5>
          </div>
          <div className="flex items-center gap-2">
            <RoomIcon className="text-lg lg:text-xl" />
            <h5 className="text-md lg:text-lg">{userAddress}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHero;
