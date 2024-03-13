import React from "react";

const LoadingUsers = () => {
  return (
    <div
      role="status"
      className="w-full mx-auto animate-pulse  flexflex-col gap-10"
    >
      <div className="w-full flex gap-10 flex-wrap items-center">
        <div className="w-full md:w-[340px] lg:w-[320px] xl:w-[380px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[320px] xl:w-[380px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[320px] xl:w-[380px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[320px] xl:w-[380px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[320px] xl:w-[380px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[320px] xl:w-[380px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[320px] xl:w-[380px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[340px] lg:w-[320px] xl:w-[380px] flex h-96 rounded bg-grayThird"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingUsers;