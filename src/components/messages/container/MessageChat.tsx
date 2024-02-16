import React from "react";
import UserPreview from "../regular/UserPreview";
import Messages from "../regular/Messages";

const user = {
  id: 2390239032,
  username: "jordy_tshibangu",
  firstName: "Charlotte",
  lastName: "Matendo",
  email: "charlotte7@example.com",
  position: "Business owner | Entrepreneur",
  birthdate: "1990-05-15",
  profile: "/assets/profile_five.jpg",
};

const MessageChat = () => {
  return (
    <div className="sticky top-32 hidden lg:block lg:w-1/2 bg-darkHeader rounded-lg px-5 py-10 max-h-[85vh]">
      <UserPreview
        name={user.firstName + " " + user.lastName}
        profile={user.profile}
        position={user.position}
      />
      <Messages />
    </div>
  );
};

export default MessageChat;
