import React from "react";

type LoadingUserProps = {
  myProfile: boolean | null;
};
const LoadingUser: React.FC<LoadingUserProps> = ({ myProfile }) => {
  return (
    <div
      role="status"
      className="w-full mx-auto animate-pulse  flex flex-col lg:flex-row gap-10"
    >
      <div className="w-full">
        <div className="flex w-full h-96 lg:h-[500px] rounded bg-grayThird dark:bg-darkHeader"></div>
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
        <div className="w-full">
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[460px] mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[360px]"></div>
        </div>
        <div className="w-full">
          <div className="h-2.5 bg-grayFour rounded-full dark:bg-darkHeader w-48 mb-4"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[460px] mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[360px]"></div>
        </div>
        <div className="w-full">
          <div className="h-2.5 bg-grayFour rounded-full dark:bg-darkHeader w-48 mb-4"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
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
      <div className="flex lg:w-1/3 h-96 lg:h-full rounded bg-grayThird dark:bg-darkHeader"></div>
    </div>
  );
};

export default LoadingUser;
