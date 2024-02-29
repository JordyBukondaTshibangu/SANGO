import React from "react";
import { EventT } from "./EventList";
import Image from "next/image";
import { FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import PersonIcon from "@mui/icons-material/Person";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

type EventProps = {
  event: EventT;
};
const Event: React.FC<EventProps> = ({ event }) => {
  const {
    image,
    name,
    description,
    date,
    guests,
    gallery,
    venue,
    email,
    organiser,
    phone,
  } = event;
  return (
    <div className="flex flex-col gap-10 lg:-mt-20">
      <div className="w-full h-[600px]">
        <Image
          src={image}
          width={200}
          height={200}
          alt=""
          className="w-full h-full bg-contain"
        />
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex gap-6">
            <span className="cursor-pointer flex items-center justify-center bg-primary rounded-3xl text-white text-sm lg:px-5 lg:py-3 px-4 py-2">
              View Agenda
            </span>
            <span className="cursor-pointer flex items-center justify-center bg-grayFirst rounded-3xl text-white text-sm lg:px-5 lg:py-3 px-4 py-2">
              Unenroll
            </span>
            <span className="cursor-pointer flex items-center justify-center  bg-white  dark:bg-darkHeader rounded-3xl text-white text-sm lg:px-5 lg:py-3 px-4 py-2">
              Personalize
            </span>
          </div>
          <div className="flex gap-4">
            <span>LinkedIn</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-medium text-white">{name}</h2>
      <div className="flex flex-col gap-6">
        <h4 className="text-xl font-medium">Description</h4>
        <p className="text-[16px].leading-8">{description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <FaRegCalendarAlt className="text-xl leading-none" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaUsers className="text-xl leading-none" />
          <span>{guests} Guests</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-20">
        <div className="flex-1 flex flex-col gap-10">
          <h4 className="text-xl font-medium">Venu details</h4>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-6">
              <div className=" bg-white  dark:bg-darkHeader w-fll min-w-96 h-72 rounded-md"></div>
              <div className="flex gap-2 items-center">
                <RoomOutlinedIcon className="text-xl" />
                <p>{venue}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <PersonIcon className="text-2xl" />
                <span className="text-[16px]">{organiser}</span>
              </div>
              <div className="flex gap-4 items-center">
                <LocalPhoneIcon className="text-2xl" />
                <span className="text-[16px]">{phone}</span>
              </div>
              <div className="flex gap-4 items-center">
                <EmailIcon className="text-2xl" />
                <span className="text-[16px]">{email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4  bg-white  dark:bg-darkHeader px-5 py-10 rounded-xl">
          <h4 className="text-xl font-medium">Photo Gallery</h4>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {gallery.map((pic: string, index: number) => (
              <Image
                key={index}
                src={pic}
                width={180}
                height={100}
                alt=""
                className="rounded-2xl hover:scale-110 transition ease-in-out duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
