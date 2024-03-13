import React from "react";

const LoadingArticles = () => {
  return (
    <div
      role="status"
      className="w-full mx-auto animate-pulse  md:flex flex-col gap-10"
    >
      <div className="flex w-full h-32 md:h-[450px] rounded bg-grayThird"></div>
      <div className="w-full flex gap-10 flex-wrap items-center justify-center">
        <div className="w-full md:w-[320px] lg:w-[370px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[320px] lg:w-[370px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[320px] lg:w-[370px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[320px] lg:w-[370px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[320px] lg:w-[370px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[320px] lg:w-[370px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[320px] lg:w-[370px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[320px] lg:w-[370px] flex h-96 rounded bg-grayThird"></div>
        <div className="w-full md:w-[320px] lg:w-[370px] flex h-96 rounded bg-grayThird"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingArticles;
