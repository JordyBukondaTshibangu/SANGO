import React from "react";
import Image from "next/image";
import profileImage from "../../../../public/assets/profile_five.jpg";
import { NotificationT } from "../container/NotificationsList";

type NotificationProps = {
  notification: NotificationT;
};
const Notification: React.FC<NotificationProps> = ({ notification }) => {
  const { message, time, read } = notification;
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC",
    };
    return date.toLocaleString("en-US", options);
  }

  return (
    <div className="cursor-pointer w-full flex gap-5 lg:items-center px-5 py-4 bg-darkHeader rounded-lg transition ease-in-out duration-200 hover:shadow-xl">
      <div className="flex justify-center items-center rounded-full w-8 md:w-10 lg:w-16 h-8 md:h-10 lg:h-16">
        <Image
          src={profileImage}
          width={200}
          height={200}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-bold">Yve Biko</h4>
        <p className="text-sm leading-5">{message}</p>
      </div>
      <div className="flex flex-col gap-4 ml-auto self-start items-center">
        <span className="text-xs min-w-max">{formatDate(time)}</span>
        {read ? (
          <span className="w-2 h-2 rounded-full bg-sucess"></span>
        ) : (
          <span className="w-2 h-2 rounded-full bg-danger"></span>
        )}
      </div>
    </div>
  );
};

export default Notification;
