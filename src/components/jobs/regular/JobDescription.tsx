import React from "react";

type JobDescriptionProps = {
  description: string;
  requirements: string[];
  desirables: string[];
  benefits: string[];
};

const JobDescription: React.FC<JobDescriptionProps> = ({
  description,
  requirements,
  desirables,
  benefits,
}) => {
  return (
    <div className="w-full flex flex-col gap-20 mt-5">
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">Job Description</h4>
        <p className="text-[18px] leading-8">{description}</p>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">Requirement</h4>
        <ul className="flex flex-col gap-2 list-disc px-4">
          {requirements.map((requirement: string, index: number) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">Desirables</h4>
        <ul className="flex flex-col gap-2 list-disc px-4">
          {desirables.map((desirable: string, index: number) => (
            <li key={index}>{desirable}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">Benefits</h4>
        <ul className="flex flex-col gap-2 list-disc px-4">
          {benefits.map((benefit: string, index: number) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
