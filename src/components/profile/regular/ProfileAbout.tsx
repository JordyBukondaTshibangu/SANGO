import React from "react";
import PersonIcon from "@mui/icons-material/Person";

type ProfileAboutProps = {
  bio: string;
  other: boolean;
};
const ProfileAbout: React.FC<ProfileAboutProps> = ({ bio, other }) => {
  return (
    <div className="w-full  bg-white  dark:bg-darkHeader rounded-lg flex flex-col gap-5 px-5 py-10">
      <div className="w-full flex gap-4 items-center">
        <PersonIcon className="text-3xl" />
        <h4 className="text-2xl font-bold">About {!other && "me"}</h4>
      </div>
      <p className="text-md leading-8">{bio}</p>
    </div>
  );
};

export default ProfileAbout;
