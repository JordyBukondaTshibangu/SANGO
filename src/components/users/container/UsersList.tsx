import React from "react";
import UserCard from "../regular/UserCard";

export type UserT = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string;
  gender: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phoneNumber: string;
  position: string;
  profile: string;
  bio: string;
  experience: {
    jobPosition: string;
    description: string;
    company: string;
    year: number;
  }[];
  socialLinks: any;
  skills: { skill: string; proficiency: number }[];
  createdAt: string;
};

type UsersListProps = {
  users: UserT[];
};

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {users.map((user: UserT, index: number) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
