"use client";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Alert from "@mui/material/Alert";

type NewEventDateTimeProps = {
  addDate: (startDate: Dayjs | null, endDate: Dayjs | null) => void;
  addTime: (startTime: Dayjs | null, endTime: Dayjs | null) => void;
};
const NewEventDateTime: React.FC<NewEventDateTimeProps> = ({
  addDate,
  addTime,
}) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs("2024-04-17"));
  const [clearedStartDate, setClearedStartDate] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs("2024-04-17"));
  const [clearedEndDate, setClearedEndDate] = useState<boolean>(false);

  const [startTime, setStartTime] = useState<Dayjs | null>(
    dayjs("2024-04-17T15:30"),
  );
  const [endTime, setEndTime] = useState<Dayjs | null>(
    dayjs("2024-04-17T15:30"),
  );

  const today = dayjs();

  useEffect(() => {
    if (clearedStartDate) {
      const timeout = setTimeout(() => {
        setClearedStartDate(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    if (clearedEndDate) {
      const timeout = setTimeout(() => {
        setClearedEndDate(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [clearedStartDate, clearedEndDate]);

  const handleTimeDateChange = () => {
    addDate(startDate, endDate);
    addTime(startTime, endTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker", "TimePicker"]}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full flex-1 flex flex-col gap-2">
            <div className="h-10">
              {clearedStartDate && (
                <Alert severity="success">Field cleared!</Alert>
              )}
            </div>
            <DatePicker
              defaultValue={today}
              disablePast
              label="Start date"
              value={startDate}
              className="w-full"
              slotProps={{
                field: {
                  clearable: true,
                  onClear: () => setClearedStartDate(true),
                },
              }}
              onChange={(newValue) => {
                setStartDate(newValue);
                handleTimeDateChange();
              }}
            />
          </div>
          <div className="w-full flex-1 flex flex-col gap-2">
            <div className="h-10">
              {clearedEndDate && (
                <Alert severity="success">Field cleared!</Alert>
              )}
            </div>
            <DatePicker
              defaultValue={today}
              disablePast
              label="End date"
              value={endDate}
              className="w-full"
              slotProps={{
                field: {
                  clearable: true,
                  onClear: () => setClearedEndDate(true),
                },
              }}
              onChange={(newValue) => {
                setEndDate(newValue);
                handleTimeDateChange();
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full flex-1">
            <TimePicker
              label="Controlled picker"
              value={startTime}
              className="w-full"
              onChange={(newValue) => {
                setStartTime(newValue);
                handleTimeDateChange();
              }}
            />
          </div>
          <div className="w-full flex-1">
            <TimePicker
              label="Controlled picker"
              value={endTime}
              className="w-full"
              onChange={(newValue) => {
                setEndTime(newValue);
                handleTimeDateChange();
              }}
            />
          </div>
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default NewEventDateTime;
