import Profile, { UserT } from "@/components/profile/container/Profile";
import UserList from "@/components/profile/container/UserList";
import React from "react";

async function getUsers() {
  const res = await fetch("http://127.0.0.1:8080/users.json", {
    cache: "no-cache",
  });
  const users = await res.json();
  const user = users[0];
  const usersList = users.filter((us: UserT) => us.id !== 2390239032);

  if (!res.ok) {
    throw new Error("Failed to fetch Users");
  }

  return { usersList, user };
}

const MyProfilePage = async () => {
  const { user, usersList } = await getUsers();
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:-mt-10">
      <Profile user={user} other={false} />
      <UserList users={usersList} />
    </div>
  );
};

export default MyProfilePage;
