import React from "react";
import UserPreview from "../regular/UserPreview";
import Messages from "../regular/Messages";
import { ChatT } from "./MessagesList";

type MessageChatProps = {
  chat: ChatT;
};
const MessageChat: React.FC<MessageChatProps> = ({ chat }) => {
  return (
    <div className="block w-full lg:w-2/3  bg-white  dark:bg-darkHeader rounded-lg px-5 py-10 lg:max-h-[90vh]">
      <UserPreview
        name={chat.sender}
        profile={chat.profile}
        position="Business owner | Entrepreneur"
      />
      <Messages messages={chat.text} />
    </div>
  );
};

export default MessageChat;
