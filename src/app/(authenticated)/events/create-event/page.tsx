"use client";
import React, { useState, FormEvent } from "react";
import dayjs, { Dayjs } from "dayjs";
import NewEventDetailTiming from "@/components/events/container/NewEventDetailTiming";
import NewEventDetailInfo from "@/components/events/container/NewEventDetailInfo";
import NewEventDetailHost from "@/components/events/container/NewEventDetailHost";
import NewEventDetailVenu from "@/components/events/container/NewEventDetailVenu";

const CreateEventPage = () => {
  let date = dayjs("2024-04-17");
  let time = dayjs("2024-04-17T15:30");

  const [name, setName] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs | null>(date);
  const [endDate, setEndDate] = useState<Dayjs | null>(date);
  const [startTime, setStartTime] = useState<Dayjs | null>(time);
  const [endTime, setEndTime] = useState<Dayjs | null>(time);
  const [venue, setVenue] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [guests, setGuests] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [organiser, setOrganiser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleEventTime = (startTime: Dayjs | null, endTime: Dayjs | null) => {
    setStartTime(startTime);
    setEndTime(endTime);
  };

  const handleEventDate = (startDate: Dayjs | null, endDate: Dayjs | null) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const handleEventName = (name: string) => {
    setName(name);
  };
  const handleEventInfo = (
    venue: string,
    location: string,
    guests: number,
    category: string,
    description: string,
    tags: string[],
  ) => {
    setVenue(venue);
    setLocation(location);
    setGuests(guests);
    setCategory(category);
    setDescription(description);
    setTags(tags);
  };

  const handleHostDetail = (
    organiser: string,
    email: string,
    phoneNumber: string,
  ) => {
    setOrganiser(organiser);
    setEmail(email);
    setPhoneNumber(phoneNumber);
  };
  const handleCreateEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newEvent = {
      name,
      startDate,
      endDate,
      startTime,
      endTime,
      venue,
      location,
      guests,
      category,
      description,
      tags,
      organiser,
      email,
      phoneNumber,
    };

    console.log(newEvent);
  };
  return (
    <form
      className="w-full lg:max-w-5xl mx-auto flex flex-col gap-10 xl:-my-10"
      onSubmit={handleCreateEvent}
    >
      <NewEventDetailTiming
        addName={handleEventName}
        addDate={handleEventDate}
        addTime={handleEventTime}
      />
      <NewEventDetailInfo addEventInfo={handleEventInfo} />
      <NewEventDetailHost addHostDetails={handleHostDetail} />
      <NewEventDetailVenu />
      <div className="flex justify-end">
        <button
          type="submit"
          className="w-56 h-12  bg-primary  dark:bg-darkHeader text-white dark:text-grayFirst border-2border-grayFour dark:border-dark border-solid rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition duration-300 ease-in-out"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CreateEventPage;
