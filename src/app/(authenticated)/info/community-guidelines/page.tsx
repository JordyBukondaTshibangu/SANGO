/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import CommunityImg from "../../../../../public/assets/Undraw/community.svg";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const CommunityGuidelinePage = () => {
  return (
    <div className="flex flex-col gap-20 xl:px-32">
      <div className="flex items-center justify-center w-full mb-10">
        <Image src={CommunityImg} width={300} height={300} alt="" />
      </div>
      <h1 className="text-4xl">
        We want Sango to reflect the best version of professional life
      </h1>
      <h4 className="text-2xl font-bold">
        This is a community where we treat each other with respect and help each
        other succeed.
      </h4>
      <div>
        <h4 className="text-2xl font-bold">
          Sango Professional Community Policies
        </h4>
        <p>
          Thank you for using Sango, where the world’s professionals come
          together to find jobs, stay informed, learn new skills, and build
          productive relationships. The content that you contribute should add
          to the Sango community in a constructive manner. Additional
          information on what that means, is laid out below. You should also
          review our Publishing Platform Guidelines. Together we can make our
          community a place where everyone is able to learn, grow, and
          communicate, which, in turn, helps create economic opportunity for
          everyone.
        </p>
      </div>
      <div className="flex gap-14  bg-white  dark:bg-darkHeader px-5 py-10 rounded-xl">
        <QuestionAnswerIcon className="text-3xl" />
        <div className="flex flex-col gap-10">
          <h4 className="text-2xl font-bold">
            Tell us if you see abusive content
          </h4>
          <p>
            If you see something you believe may violate our policies, whether
            in profiles, posts, messages, comments, or anywhere else, please
            report it to us. Combined with our automated defenses, these reports
            help us identify and prevent abuse. Users can report content by
            clicking on the three dots icon in the upper right-hand corner of
            the content itself on Sango. Please use the reporting tools
            responsibly and only for their intended purposes. To learn more
            about how to report inappropriate content, behavior, or members,
            visit our Transparency Center.
          </p>
          <p>
            In addition to Sango's trained content reviewers, we use automated
            systems to identify potentially violative content. Violating content
            can be removed from Sango. Learn more about our approach to content
            moderation, including our automated systems, here.
          </p>
        </div>
      </div>
      <div className="flex gap-14  bg-white  dark:bg-darkHeader px-5 py-10 rounded-xl">
        <QuestionAnswerIcon className="text-3xl" />
        <div className="flex flex-col gap-10">
          <h4 className="text-2xl font-bold">
            Violating our community policies can result in action against your
            account or content
          </h4>
          <p>
            These policies apply to all members. Depending on the severity of
            violation, we may limit the visibility of certain content, label it,
            or remove it entirely. Repeated or egregious offenses will result in
            account restriction. If you believe action taken on your content or
            your account was in error, you can submit an appeal.Learn more about
            how we enforce violations of our Professional Community Policies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelinePage;
