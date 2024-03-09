import React, { useState } from "react";
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
  position: string;
};

type MessagesListProps = {
  chats: ChatT[];
  selectChat: (chat: ChatT) => void;
};

const MessagesList: React.FC<MessagesListProps> = ({ chats, selectChat }) => {
  const [chatList, setChatList] = useState<ChatT[]>(chats);

  const handleSearchChat = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      let updatedChatList: ChatT[] = chatList;
      updatedChatList = updatedChatList.filter((chat) =>
        chat.sender
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase()),
      );
      setChatList(updatedChatList);
    } else {
      // console.log("first");
      setChatList(chats);
    }
  };
  return (
    <div className="lg:sticky top-32 w-full lg:w-[40%] lg:bg-white  lg:dark:bg-darkHeader lg:rounded-lg lg:px-5 lg:py-10 flex flex-col gap-12 h-fit">
      <div className="w-full hidden lg:flex">
        <UserPreview
          name={user.firstName + " " + user.lastName}
          profile={user.profile}
          position={user.position}
        />
      </div>
      <input
        type="text"
        className="w-full h-12 rounded-full px-5 py-2 text-lightFontColor dark:text-fontColor border dark:border-none border-solid border-grayFour lg:bg-light dark:bg-darkHeader lg:dark:bg-dark outline-none"
        placeholder="Search..."
        onChange={handleSearchChat}
      />
      <div className="flex flex-col gap-5 overflow-y-auto max-h-[60vh]">
        {chatList.map((chat: any, index: number) => (
          <ChatPreview key={index} chat={chat} selectChat={selectChat} />
        ))}
      </div>
    </div>
  );
};

export default MessagesList;
