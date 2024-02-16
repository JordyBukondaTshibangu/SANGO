import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

type JobHeaderProps = {
  image: string;
  title: string;
  company: string;
  period: string;
};

const JobHeader: React.FC<JobHeaderProps> = ({
  image,
  title,
  company,
  period,
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-10">
      <div className="w-full flex items-center gap-8">
        <div className="w-32 h-32">
          <Image
            src={image}
            width={100}
            height={80}
            alt="job"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-4xl font-bold">{title}</h3>
          <div className="flex flex-col lg:flex-row gap-5">
            <h5>at {company}</h5>
            <p className="w-fit flex justify-center items-center py-2 lg:py-0 px-2 rounded-md uppercase font-medium bg-sucess text-white text-xs lg:text-sm ">
              {period}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5 md:justify-end">
        <span className="flex items-center justify-center w-20 bg-darkHeader rounded-lg cursor-pointer">
          <BookmarkBorderOutlinedIcon className="text-3xl" />
        </span>
        <Button className="bg-primary w-48 h-12 lg:h-14 rounded-lg cursor-pointer flex justify-center items-center gap-3 text-xl text-white">
          <span className="text-sm lg:text-lg font-medium">Apply Now</span>
          <ArrowForwardOutlinedIcon />
        </Button>
      </div>
    </div>
  );
};

export default JobHeader;
