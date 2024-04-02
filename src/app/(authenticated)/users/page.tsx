import MyNetwork from "@/components/common/ui/MyNetwork";
import UsersList from "@/components/users/container/UsersList";
import React, { Suspense } from "react";
import LoadingUsers from "./loading";

async function getUsers() {
  const res = await fetch("http://127.0.0.1:8080/users.json", {
    next: {
      revalidate: 60,
    },
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
      <Suspense fallback={<LoadingUsers />}>
        <UsersList users={users} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
