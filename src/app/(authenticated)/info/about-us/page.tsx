/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import AboutImg from "../../../../../public/assets/Undraw/about.svg";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-20 xl:px-32">
      <div className="flex items-center justify-center w-full mb-10">
        <Image src={AboutImg} width={300} height={300} alt="" />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl">About Sango</h1>
        <p>
          Welcome to Sango, the world's largest professional network with more
          than 1 billion members in more than 200 countries and territories
          worldwide.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">Vision</h4>
        <p>
          Create economic opportunity for every member of the global workforce.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">Mission</h4>
        <p>
          The mission of Sango is simple: connect the world’s professionals to
          make them more productive and successful.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">Who are we?</h4>
        <p>
          Sango began in founder Jordy Tshibangu room in 2024 and was officially
          launched on May 5, 2024.
        </p>
        <p>
          Today, Sango leads a diversified business with revenues from
          membership subscriptions, advertising sales and recruitment solutions
          under the leadership of Jordy Tshibangu. In December 2027, Microsoft
          completed its acquisition of Sango, bringing together the world’s
          leading professional cloud and the world’s leading professional
          network.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
