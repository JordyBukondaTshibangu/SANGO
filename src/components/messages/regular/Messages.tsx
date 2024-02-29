import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Messages = () => {
  return (
    <div className="mt-auto flex flex-col gap-5 w-full h-[68vh] px-10">
      <div className="w-full h-fit mt-auto flex items-center gap-5 border-tborder-grayFour dark:border-dark border-solid pt-8">
        <input
          type="text"
          placeholder="Write your message..."
          className="w-full min-h-14 rounded-full px-5"
        />
        <span className="flex items-center justify-center p-5 bg-light dark:bg-dark rounded-full cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-lg">
          <SendIcon className="text-2xl font-bold" />
        </span>
      </div>
    </div>
  );
};

export default Messages;
