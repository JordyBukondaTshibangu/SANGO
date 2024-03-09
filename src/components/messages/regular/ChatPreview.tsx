"use client";
import React from "react";
import Image from "next/image";
import { ChatT } from "../container/MessagesList";
import Avatar from "../../../../public/assets/Avatar.png";
import { useRouter } from "next/navigation";

type ChatPreviewProps = {
  chat: ChatT;
  selectChat: (chat: ChatT) => void;
};
const ChatPreview: React.FC<ChatPreviewProps> = ({ chat, selectChat }) => {
  const { profile, sender, text, time } = chat;

  const router = useRouter();

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC",
    };
    return date.toLocaleString("en-US", options);
  }

  const handleViewMessage = () => {
    if (window.screen.width < 975) {
      router.push("/messages/984389349898");
    } else {
      selectChat(chat);
    }
  };

  return (
    <div
      className="cursor-pointer w-full flex gap-5 items-center px-4 lg:px-5 py-3 bg-white lg:bg-light dark:bg-darkHeader dark:lg:bg-dark rounded-lg"
      onClick={handleViewMessage}
    >
      <div className="flex justify-center items-center rounded-full w-14 lg:w-20 h-14 lg:h-20">
        <Image
          src={profile ? profile : Avatar}
          width={200}
          height={200}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-bold">{sender}</h4>
        <p className="text-sm leading-5">{text}</p>
      </div>
      <span className="text-xs min-w-max ml-auto self-start">
        {formatDate(time)}
      </span>
    </div>
  );
};

export default ChatPreview;
