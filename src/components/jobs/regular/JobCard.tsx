import React from "react";
import { JobT } from "../Jobs";
import Image from "next/image";
import Link from "next/link";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

type JobCardProps = {
  job: JobT;
};
const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="flex flex-col gap-5 bg-light dark:bg-dark border-solid border-2border-grayFour dark:border-darkHeader shadow-lg p-5 lg:p-10  lg:h-[280px] cursor-pointer rounded-lg"
    >
      <div className="flex justify-between">
        <h3 className="text-lg">{job.title}</h3>
        <BookmarkBorderOutlinedIcon className="self-end" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="uppercase font-medium text-sucess text-xs lg:text-sm ">
          {job.period}
        </p>
        <p className="text-sm">Salary : {job.salary}</p>
      </div>
      <div className="flex gap-4 items-start">
        <Image
          src={job.image}
          width={35}
          height={35}
          alt="jobimage"
          className="object-contain w-auto h-auto"
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm lg:text-md">{job.company}</p>
          <p className="flex items-center gap-1">
            <FmdGoodOutlinedIcon className="text-md lg:text-lg text-primary" />
            <span className="text-xs lg:text-sm">{job.location}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
