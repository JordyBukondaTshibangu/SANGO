"use client";
import NewJobDetailDescription from "@/components/jobs/container/NewJobDetailDescription";
import NewJobDetailInfo, {
  JobDetailsT,
} from "@/components/jobs/container/NewJobDetailInfo";
import NewJobDetailList from "@/components/jobs/container/NewJobDetailList";
import React, { useState } from "react";

const CreateJobPage = () => {
  const [jobDetails, setJobDetails] = useState<JobDetailsT>();
  const [description, setDescription] = useState<string>("");
  const [requirements, setRequirements] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<string[]>([]);

  const handleCreateJob = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const job = {
      ...jobDetails,
      description,
      requirements,
      benefits,
    };
    console.log(job)
  };

  return (
    <form
      className="w-full lg:max-w-5xl mx-auto flex flex-col gap-10 xl:-my-10"
      onSubmit={handleCreateJob}
    >
      <NewJobDetailInfo
        addJobDetails={(items: JobDetailsT) => {
          setJobDetails(items);
        }}
      />
      <NewJobDetailDescription
        addDescription={(item: string) => {
          setDescription(item);
        }}
      />
      <NewJobDetailList
        name="Requirements"
        addItems={(items: string[]) => {
          setRequirements(items);
        }}
      />
      <NewJobDetailList
        name="Benefits"
        addItems={(items: string[]) => {
          setBenefits(items);
        }}
      />
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

export default CreateJobPage;
