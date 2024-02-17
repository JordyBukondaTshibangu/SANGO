"use client";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import NewEventImage from "../regular/NewEventImage";
import NewEventDateTime from "../regular/NewEventDateTime";

type NewEventDetailTimingProps = {
  addDetailTiming: (
    name: string,
    startDate: Dayjs | null,
    endDate: Dayjs | null,
    startTime: Dayjs | null,
    endTime: Dayjs | null,
  ) => void;
};

const NewEventDetailTiming: React.FC<NewEventDetailTimingProps> = ({
  addDetailTiming,
}) => {
  const [name, setName] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs("2024-04-17"));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs("2024-04-17"));
  const [startTime, setStartTime] = useState<Dayjs | null>(
    dayjs("2024-04-17T15:30"),
  );
  const [endTime, setEndTime] = useState<Dayjs | null>(
    dayjs("2024-04-17T15:30"),
  );

  const handleTiming = () => {
    addDetailTiming(name, startDate, endDate, startTime, endTime);
  };

  return (
    <div className="bg-darkHeader px-5 lg:px-10 py-10 rounded-lg flex flex-col">
      <input
        className="min-w-fit bg-darkHeader text-2xl lg:text-4xl font-medium outline-none"
        required
        placeholder="Event name*"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <NewEventImage />
      <NewEventDateTime
        addDate={(startDate: Dayjs | null, endDate: Dayjs | null) => {
          setStartDate(startDate);
          setEndDate(endDate);
          handleTiming();
        }}
        addTime={(startDate: Dayjs | null, endDate: Dayjs | null) => {
          setStartDate(startDate);
          setEndDate(endDate);
          handleTiming();
        }}
      />
    </div>
  );
};

export default NewEventDetailTiming;
