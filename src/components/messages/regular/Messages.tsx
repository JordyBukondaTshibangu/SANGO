import React from "react";
import SendIcon from "@mui/icons-material/Send";

type MessagesProps = {
  messages: string;
};
const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div className="mt-auto flex flex-col gap-3 lg:gap-5 w-full h-[68vh] lg:px-10">
      <div className="w-full h-fit mt-auto flex items-center gap-2  lg:gap-5 lg:border-t border-grayFour dark:border-dark border-solid pt-8">
        <input
          type="text"
          placeholder="Write your message..."
          className="w-full min-h-14 rounded-full px-5 bg-light dark:bg-dark"
        />
        <span className="flex items-center justify-center p-3 lg:p-5 bg-light dark:bg-dark rounded-full cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-lg">
          <SendIcon className="text-2xl font-bold" />
        </span>
      </div>
    </div>
  );
};

export default Messages;
