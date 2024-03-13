import React from "react";

const LoadingEvents = () => {
  return (
    <div
      role="status"
      className="w-full mx-auto animate-pulse  flex flex-col gap-10"
    >
      <div className="flex w-full h-32 md:h-[450px] rounded bg-grayThird dark:bg-darkHeader"></div>
      <div className="w-full flex gap-10 flex-wrap items-center">
        <div className="w-full md:w-[320px] lg:w-[280px] flex h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
        <div className="w-full md:w-[320px] lg:w-[290px] flex h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
        <div className="w-full md:w-[320px] lg:w-[290px] flex h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
        <div className="w-full md:w-[320px] lg:w-[290px] flex h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
        <div className="w-full md:w-[320px] lg:w-[290px] flex h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
        <div className="w-full md:w-[320px] lg:w-[290px] flex h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
        <div className="w-full md:w-[320px] lg:w-[290px] flex h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
        <div className="w-full md:w-[320px] lg:w-[290px] flex h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
        <div className="w-full md:w-[320px] lg:w-[290px] flex h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingEvents;
