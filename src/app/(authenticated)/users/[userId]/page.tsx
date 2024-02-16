import Profile, { UserT } from "@/components/profile/container/Profile";
import { NextPage } from "next";

async function getSingleUser(userId: number) {
  const res = await fetch("http://127.0.0.1:8080/users.json", {
    cache: "no-cache",
  });
  const data = await res.json();

  const user = data?.filter((item: UserT) => item.id === Number(userId))[0];
  const relatedUsers = data.filter((item: UserT) => item.id !== Number(userId));

  if (!res.ok) {
    throw new Error("Failed to fetch Users");
  }

  return { relatedUsers, user };
}

interface UserDetailProps {
  searchParams: string;
  params: string;
}

const UserDetailPage: NextPage<UserDetailProps> = async (props: any) => {
  const { userId } = props.params;
  const { user } = await getSingleUser(userId);

  return (
    <div className="flex gap-10 -mt-10">
      <Profile user={user} other={true} />
      <div></div>
    </div>
  );
};

export default UserDetailPage;
