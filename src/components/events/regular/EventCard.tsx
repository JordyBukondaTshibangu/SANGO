"use client";
import React from "react";
import { Event } from "../container/EventList";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import ArticleImg from "../../../../public/assets/article.jpg";
import Link from "next/link";
import RoomIcon from "@mui/icons-material/Room";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

type EventCardProps = {
  event: Event;
};

const ArticleCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link
      href={`events/${event.id}`}
      className="flex-1 flex min-w-[220px] lg:min-w-[248px] max-w-[348px] min-h-[394px] max-h-[394px] bg-cover rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer  flex-col justify-end items-center gap-3 pb-10 px-10 text-center"
      style={{ backgroundImage: `url(${event.image})` }}
    >
      <h1 className="lg:text-2xl font-bold mb-2 text-white">{event.name}</h1>
      <h5 className="flex items-center gap-2 text-lg lg:text-xl font-bold text-white">
        <RoomIcon />
        <span>{event.location}</span>
      </h5>
      <h6 className="flex items-center gap-2 text-sm lg:text-lg text-white">
        <CalendarMonthIcon />
        <span>{event.date}</span>
      </h6>
    </Link>
  );
};

export default ArticleCard;
