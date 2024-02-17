"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const ProSpan = styled("span")({
  display: "inline-block",
  height: "1em",
  width: "1em",
  verticalAlign: "middle",
  marginLeft: "0.3em",
  marginBottom: "0.08em",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url(https://mui.com/static/x/pro.svg)",
});

function Label({
  componentName,
  valueType,
  isProOnly,
}: {
  componentName: string;
  valueType: string;
  isProOnly?: boolean;
}) {
  const content = (
    <span className="">
      <strong>{componentName}</strong>
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a
            href="https://mui.com/x/introduction/licensing/#pro-plan"
            aria-label="Included on Pro package"
          >
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}

const NewEventDateTime = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker", "TimePicker"]}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full flex-1">
            <DemoItem
              label={<Label componentName="Start date" valueType="date" />}
            >
              <DatePicker />
            </DemoItem>
          </div>
          <div className="w-full flex-1">
            <DemoItem
              label={<Label componentName="End date" valueType="date" />}
            >
              <DatePicker />
            </DemoItem>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full flex-1">
            <DemoItem
              label={<Label componentName="Start time" valueType="time" />}
            >
              <TimePicker />
            </DemoItem>
          </div>
          <div className="w-full flex-1">
            <DemoItem
              label={<Label componentName="End time" valueType="time" />}
            >
              <TimePicker />
            </DemoItem>
          </div>
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default NewEventDateTime;
