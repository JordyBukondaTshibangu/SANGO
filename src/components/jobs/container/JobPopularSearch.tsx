import React from "react";

type JobPopularSearchProps = {
  popularSearches: string[];
};
const JobPopularSearch: React.FC<JobPopularSearchProps> = ({
  popularSearches,
}) => {
  return (
    <div className="flex items-center gap-4 overflow-auto py-4">
      <span className="min-w-max">Popular searches : </span>
      {popularSearches.map((search: string, index: number) => (
        <span key={index} className="font-medium min-w-max">
          {search}
        </span>
      ))}
    </div>
  );
};

export default JobPopularSearch;
