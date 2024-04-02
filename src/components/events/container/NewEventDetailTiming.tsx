"use client";
import React, { useState } from "react";
import { Dayjs } from "dayjs";
import NewEventImage from "../../common/base/ImageUploader";
import NewEventDateTime from "../regular/NewEventDateTime";

type NewEventDetailTimingProps = {
  addName: (name: string) => void;
  addDate: (startDate: Dayjs | null, endDate: Dayjs | null) => void;
  addTime: (startTime: Dayjs | null, endTime: Dayjs | null) => void;
};

const NewEventDetailTiming: React.FC<NewEventDetailTimingProps> = ({
  addName,
  addDate,
  addTime,
}) => {
  const [name, setName] = useState<string>("");

  const handleEventName = () => addName(name);

  return (
    <div className=" bg-white  dark:bg-darkHeader px-5 lg:px-10 py-10 rounded-lg flex flex-col">
      <input
        className="min-w-fit bg-white dark:bg-darkHeader text-2xl lg:text-4xl font-medium outline-none"
        required
        placeholder="Event name*"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          handleEventName();
        }}
      />
      <NewEventImage />
      <NewEventDateTime
        addDate={(startDate: Dayjs | null, endDate: Dayjs | null) => {
          addDate(startDate, endDate);
        }}
        addTime={(startDate: Dayjs | null, endDate: Dayjs | null) => {
          addTime(startDate, endDate);
        }}
      />
    </div>
  );
};

export default NewEventDetailTiming;
