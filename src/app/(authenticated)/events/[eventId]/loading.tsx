import React from "react";

const LoadingEvent = () => {
  return (
    <div
      role="status"
      className="w-full mx-auto animate-pulse  flexflex-col gap-10"
    >
      <div className="flex w-full h-96 rounded bg-grayThird"></div>

      <div className="w-full">
        <div className="h-2 bg-grayThird rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-20 justify-between my-5">
        <div className="w-full">
          <div className="flex w-full h-96 rounded bg-grayThird"></div>
        </div>
        <div className="w-full">
          <div className="flex w-full h-96 rounded bg-grayThird"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingEvent;
