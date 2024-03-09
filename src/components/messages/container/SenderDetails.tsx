import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChatT } from "./MessagesList";

type SenderDetailsProps = {
  chat: ChatT;
};

const SenderDetails: React.FC<SenderDetailsProps> = ({ chat }) => {
  return (
    <div className="hidden lg:flex flex-col items-center w-[33%] gap-5 py-10 px-5 rounded-lg lg:pb-10  bg-white  dark:bg-darkHeader h-fit">
      <div className="flex justify-center items-center rounded-full w-20 h-20">
        <Image
          src={chat.profile}
          width={200}
          height={200}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h4 className="text-2xl font-bold">{chat.sender}</h4>
        <div className="flex flex-col">
          <p>{chat.position}</p>
        </div>
        <Link
          href={`/users/239329233232`}
          className="bg-light dark:bg-dark flex items-center justify-center py-2 px-5 rounded-lg mt-4 hover:bg-primary hover:text-white transition duration-300"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default SenderDetails;
