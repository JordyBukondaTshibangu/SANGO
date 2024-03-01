import React from "react";
import ChatPreview from "../regular/ChatPreview";
import UserPreview from "../regular/UserPreview";

const user = {
  id: 2390239032,
  username: "jordy_tshibangu",
  firstName: "Jordy",
  lastName: "Tshibangu",
  email: "jordy@example.com",
  position: "Software Engineer | Entrepreneur",
  birthdate: "1990-05-15",
  profile: "/assets/profile.jpeg",
};

export type ChatT = {
  sender: string;
  text: string;
  profile: string;
  time: string;
};

type MessagesListProps = {
  chats: ChatT[];
};

const MessagesList: React.FC<MessagesListProps> = ({ chats }) => {
  return (
    <div className="lg:sticky top-32 w-full lg:w-[33%] lg: bg-white  dark:bg-darkHeader lg:rounded-lg lg:px-5 py-10 flex flex-col gap-12 h-fit">
      <div className="w-full hidden lg:flex">
        <UserPreview
          name={user.firstName + " " + user.lastName}
          profile={user.profile}
          position={user.position}
        />
      </div>
      <input
        type="text"
        className="w-full h-12 rounded-full px-5 py-2 text-lightFontColor dark:text-fontColor border dark:border-none border-solid border-grayFour bg-light dark:bg-dark outline-none"
        placeholder="Search..."
      />
      <div className="flex flex-col gap-5 overflow-y-auto max-h-[60vh]">
        {chats.map((chat: any, index: number) => (
          <ChatPreview key={index} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default MessagesList;
