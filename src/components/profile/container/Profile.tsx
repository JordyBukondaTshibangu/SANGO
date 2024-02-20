import React from "react";
import ProfileHero from "../regular/ProfileHero";
import ProfileAbout from "../regular/ProfileAbout";
import ProfileActivity from "../regular/ProfileActivity";
import ProfileSkills from "../regular/ProfileSkills";
import ProfileExperience from "../regular/ProfileExperience";
import { PostT } from "@/components/posts/container/PostsList";
import { ArticleT } from "@/components/articles/container/Article";
import { EventT } from "@/components/events/container/EventList";

export type UserExperienceT = {
  jobPosition: string;
  description: string;
  company: string;
  year: number;
};

export type UserSkillT = {
  skill: string;
  proficienty: number;
};
export type UserAddressT = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type UserT = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string;
  gender: string;
  address: UserAddressT;
  phoneNumber: string;
  position: string;
  profile: string;
  bio: string;
  experience: UserExperienceT[];
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  skills: UserSkillT[];
  createdAt: string;
};

type ProfileProps = {
  user: UserT;
  other: boolean;
  posts: PostT[];
  articles: ArticleT[];
  events: EventT[];
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
        email={user.email}
        birthday={user.birthdate}
        gender={user.gender}
        address={user.address}
        phoneNumber={user.phoneNumber}
      />
      <ProfileAbout bio={user.bio} other={other} />
      <ProfileSkills skills={user.skills} other={other} />
      <ProfileExperience experiences={user.experience} other={other} />
      <ProfileActivity posts={posts} articles={articles} events={events} />
    </div>
  );
};

export default Profile;
