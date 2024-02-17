'use client'
import React, { useState, useRef } from "react";
import dayjs, { Dayjs } from "dayjs";
import NewEventDetailTiming from "@/components/events/container/NewEventDetailTiming";
import NewEventDetailInfo from "@/components/events/container/NewEventDetailInfo";
import NewEventDetailHost from "@/components/events/container/NewEventDetailHost";
import NewEventDetailVenu from "@/components/events/container/NewEventDetailVenu";
import { useAppSelector, useAppDispatch, useAppStore } from '../../../store/hooks'
import { eventSlice } from '../../../store/features/event/eventSlice'

const CreateEventPage = () => {

  

  const [ name, setName ] = useState<string>("")
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs("2024-04-17"));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs("2024-04-17"));
  const [startTime, setStartTime] = useState<Dayjs | null>(
    dayjs("2024-04-17T15:30"),
  );
  const [endTime, setEndTime] = useState<Dayjs | null>(
    dayjs("2024-04-17T15:30"),
  );


  const handleDetailTiming = (
    name: string,
    startDate: Dayjs | null,
    endDate: Dayjs | null,
    startTime: Dayjs | null,
    endTime: Dayjs | null,
  ) => {
    setName(name)
    setStartDate(startDate);
    setEndDate(endDate);
    setStartTime(startTime);
    setEndTime(endTime)
  };

  const handleCreateEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newEvent = {
      name,
      startDate,
      endDate,
      startTime,
      endTime,
    }

    console.log(newEvent)
  }
  return (
    <form className="w-full lg:max-w-5xl mx-auto flex flex-col gap-10 xl:-my-10" onSubmit={handleCreateEvent}>
      <NewEventDetailTiming addDetailTiming={handleDetailTiming} />
      {/* <NewEventDetailInfo /> */}
      <NewEventDetailHost />
      <NewEventDetailVenu />
      <div className="flex justify-end">
        <button
          type="submit"
          className="w-56 h-12 bg-darkHeader text-grayFirst border-2 border-dark border-solid rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition duration-300 ease-in-out"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CreateEventPage;
