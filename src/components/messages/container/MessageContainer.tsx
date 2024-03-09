"use client";
import React, { useState } from "react";
import MessagesList, { ChatT } from "./MessagesList";
import MessageChat from "./MessageChat";
import SenderDetails from "./SenderDetails";

type MessageContainerProps = {
  chats: ChatT[];
};

const MessageContainer: React.FC<MessageContainerProps> = ({ chats }) => {
  const [chat, SetChat] = useState<ChatT>(chats[0]);
  const handleSelectedChat = (chat: ChatT) => {
    SetChat(chat);
  };
  return (
    <div className="relative w-full flex lg:-my-10 lg:gap-5">
      <MessagesList chats={chats} selectChat={handleSelectedChat} />
      <div className="w-full flex gap-5">
        <MessageChat chat={chat} />
        <SenderDetails chat={chat} />
      </div>
    </div>
  );
};

export default MessageContainer;
