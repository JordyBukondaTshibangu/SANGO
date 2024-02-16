import MyNetwork from "@/components/common/ui/MyNetwork";
import UsersList from "@/components/users/container/UsersList";
import React from "react";

async function getUsers() {
  const res = await fetch("http://127.0.0.1:8080/users.json", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Users");
  }

  return res.json();
}

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div className="relative flex flex-col lg:flex-row gap-14">
      <MyNetwork />
      <UsersList users={users} />
    </div>
  );
};

export default UsersPage;
