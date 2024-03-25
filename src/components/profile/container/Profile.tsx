import React from "react";
import ProfileHero from "../regular/ProfileHero";
import ProfileAbout from "../regular/ProfileAbout";
import ProfileActivity from "../regular/ProfileActivity";
import ProfileSkills from "../regular/ProfileSkills";
import ProfileExperience from "../regular/ProfileExperience";
import { IUser } from "@/interfaces/user";
import { IArticle } from "@/interfaces/article";
import { IEvent } from "@/interfaces/event";
import { IPost } from "@/interfaces/post";

type ProfileProps = {
  user: IUser;
  other: boolean;
  posts: IPost[];
  articles: IArticle[];
  events: IEvent[];
};

const Profile: React.FC<ProfileProps> = ({
  user,
  other,
  posts,
  articles,
  events,
}) => {
  return (
    <div className="w-full flex flex-col gap-10">
      <ProfileHero
        profile={user.profile}
        firstname={user.firstName}
        lastname={user.lastName}
        position={user.position}
        company={user.company}
        email={user.email}
        birthday={user.birthdate}
        gender={user.gender}
        address={user.address}
        phoneNumber={user.phoneNumber}
        other={other}
      />
      <ProfileAbout bio={user.bio} other={other} />
      <ProfileSkills skills={user.skills} other={other} />
      <ProfileExperience experiences={user.experience} other={other} />
      <ProfileActivity posts={posts} articles={articles} events={events} />
    </div>
  );
};

export default Profile;
