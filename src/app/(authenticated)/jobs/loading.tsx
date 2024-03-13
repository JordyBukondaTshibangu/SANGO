import React from "react";

const LoadingJobs = () => {
  return (
    <div
      role="status"
      className="w-full mx-auto animate-pulse  flex flex-col gap-10"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center lg:gap-20">
        <div className="h-14 bg-grayThird rounded-lg dark:bg-gray-700 w-1/2 mb-4"></div>
        <div className="h-14 bg-grayThird rounded-lg dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-14 bg-grayThird rounded-lg dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-14 bg-grayThird rounded-lg dark:bg-gray-700 w-1/2 mb-4"></div>
      </div>
      <div className="lg:w-1/4 self-end flex flex-col lg:flex-row justify-end lg:items-center lg:gap-5">
        <div className="h-14 bg-grayThird rounded-lg dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-14 bg-grayThird rounded-lg dark:bg-gray-700 w-full mb-4"></div>
      </div>
      <div className="w-full flex gap-10 flex-wrap items-center">
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[300px] xl:w-[375px] flex h-64 rounded bg-grayThird"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingJobs;
