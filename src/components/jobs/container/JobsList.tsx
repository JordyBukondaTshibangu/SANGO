import React from "react";
import { JobT } from "../Jobs";
import JobCard from "../regular/JobCard";

type JobsListProps = {
  jobs: JobT[];
};
const JobsList: React.FC<JobsListProps> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
      {jobs.length > 0 ? (
        jobs.map((job: JobT, index: number) => (
          <JobCard key={index} job={job} />
        ))
      ) : (
        <h1 className="w-full text-4xl font-medium">No Jobs found</h1>
      )}
    </div>
  );
};

export default JobsList;
