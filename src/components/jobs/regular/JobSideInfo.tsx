import React from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

type JobSideInfoProps = {
  salary: string;
  location: string;
  postedAt: string;
  expiresIn: string;
  level: string;
  experience: number;
  education: string;
};

const JobSideInfo: React.FC<JobSideInfoProps> = ({
  salary,
  location,
  postedAt,
  expiresIn,
  level,
  experience,
  education,
}) => {
  return (
    <div className="lg:w-[68%] flex flex-col gap-10 -order-1 lg:order-1">
      <div className="flex border border-solid px-5 py-10 rounded-lg">
        <div className="flex-1 flex flex-col items-center gap-4  border-r-2 border-solid px-3">
          <h4 className="text-lg font-medium">Salary (USD)</h4>
          <h5 className="text-success text-lg text-center">{salary}</h5>
          <p>Yearly salary</p>
        </div>
        <div className="flex-1 flex flex-col items-center gap-4">
          <MapOutlinedIcon className="text-4xl" />
          <h5>Job Location</h5>
          <p>{location}</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 border border-solid px-10 py-10 rounded-lg">
        <h4 className="text-xl font-medium">Job Overview</h4>
        <div className="flex gap-8 flex-wrap">
          <div className="flex-1 flex flex-col gap-4 min-w-28">
            <CalendarTodayOutlinedIcon className="text-xl" />
            <span className="uppercase text-sm min-w-max">Job Posted:</span>
            <span className="font-bold min-w-max">{postedAt}</span>
          </div>
          <div className="flex-1 flex flex-col gap-4 min-w-28">
            <AccessTimeOutlinedIcon className="text-xl" />
            <span className="uppercase text-sm min-w-max">Job Expires in:</span>
            <span className="font-bold min-w-max">{expiresIn}</span>
          </div>
          <div className="flex-1 flex flex-col gap-4 min-w-28">
            <StickyNote2OutlinedIcon className="text-xl" />
            <span className="uppercase text-sm min-w-max">Job Level:</span>
            <span className="font-bold min-w-max">{level}</span>
          </div>
          <div className="flex-1 flex flex-col gap-4 min-w-28">
            <AccountBalanceWalletOutlinedIcon className="text-xl" />
            <span className="uppercase text-sm min-w-max">Experience:</span>
            <span className="font-bold min-w-max">{experience}</span>
          </div>
          <div className="flex-1 flex flex-col gap-4 min-w-28">
            <SchoolOutlinedIcon className="text-xl" />
            <span className="uppercase text-sm min-w-max">Education:</span>
            <span className="font-bold min-w-max">{education}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 border border-solid p-10 rounded-lg">
        <h4 className="text-xl font-medium">Share this job:</h4>
        <div className="flex gap-5">
          <div className="bg-success flex gap-2 hover: bg-white  dark:bg-darkHeader px-2 py-1 cursor-pointer rounded-md">
            <InsertLinkOutlinedIcon className="-rotate-45" />
            <h4>Copy Links</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSideInfo;
