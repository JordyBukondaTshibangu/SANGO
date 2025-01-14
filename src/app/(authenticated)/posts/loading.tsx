import React from "react";

const LoadingPost = () => {
  return (
    <div
      role="status"
      className="w-full mx-auto animate-pulse  flex flex-col gap-10"
    >
      <div className="w-full flex gap-5 items-center">
        <div className="w-28 h-24 bg-grayThird rounded-full dark:bg-darkHeader"></div>
        <div className="w-full my-5">
          <div className="h-2.5 bg-grayFour rounded-full dark:bg-darkHeader w-48 mb-4"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[480px] mb-2.5"></div>
        </div>
      </div>
      <div className="flex w-full h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
      <div className="w-full">
        <div className="h-2.5 bg-grayFour rounded-full dark:bg-darkHeader w-48 mb-4"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[360px]"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingPost;
