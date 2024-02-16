"use client";
import React from "react";
import Chip from "@mui/material/Chip";
import RoomIcon from "@mui/icons-material/Room";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { EventT } from "./EventList";
import { useRouter } from "next/navigation";

type EventHerProps = {
  event: EventT;
};

const EventHero: React.FC<EventHerProps> = ({ event }) => {
  const { id, name, date, image, venue } = event;
  const router = useRouter();

  const handleClick = () => router.push(`/events/${id}`);

  return (
    <div
      className="relative bg-cover bg-no-repeat min-h-[550px] rounded-xl flex flex-col  gap-5 md:gap-10 p-5 lg:p-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex justify-between items-center">
        <Chip
          label="Upcoming"
          className="bg-primary w-32 flex items-center justify-center py-2 px-3 rounded-2xl text-white text-[16px] hover:bg-black"
        />
        <Chip
          label="View"
          onClick={handleClick}
          className="bg-primary w-32 flex items-center justify-center py-2 px-3 rounded-2xl text-white text-[16px] hover:bg-black"
        />
      </div>
      <h1 className="mt-auto text-2xl lg:text-5xl font-medium lg:leading-[46px] lg:w-2/3 text-white">
        {name}
      </h1>
      <div className="flex flex-col md:flex-row md:items-center gap-5 lg:gap-8 text-white">
        <h6 className="flex items-center gap-2 text-sm lg:text-lg">
          <CalendarMonthIcon />
          <span>{date}</span>
        </h6>
        <h5 className="flex items-center gap-2 text-lg lg:text-xl font-bold">
          <RoomIcon />
          <span>{venue}</span>
        </h5>
      </div>
    </div>
  );
};

export default EventHero;
