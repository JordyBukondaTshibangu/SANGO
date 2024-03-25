import React from "react";
import UserCard from "../regular/UserCard";
import { IUser } from "@/interfaces/user";

type UsersListProps = {
  users: IUser[];
};

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {users.map((user: IUser, index: number) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
