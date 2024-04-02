import Profile from "@/components/profile/container/Profile";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import LoadingUser from "./loading";
import { IUser } from "@/interfaces/user";
import { IArticle } from "@/interfaces/article";
import { IEvent } from "@/interfaces/event";
import { IPost } from "@/interfaces/post";

export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:8080/users.json");
  const users = await res.json();

  return users.map((user: IUser) => ({ id: user.id }));
}
async function getSingleUser(userId: number) {
  const res = await fetch("http://127.0.0.1:8080/users.json", {
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();

  const user = data?.filter((item: IUser) => item.id === Number(userId))[0];
  const relatedUsers = data.filter((item: IUser) => item.id !== Number(userId));

  if (!res.ok) {
    throw new Error("Failed to fetch Users");
  }

  return { relatedUsers, user };
}

async function UserPosts(userId: number) {
  const res = await fetch("http://127.0.0.1:8080/posts.json", {
    next: {
      revalidate: 60,
    },
  });
  const posts = await res.json();
  const userPosts = posts.filter((post: IPost) => post.author.id == userId);

  if (!res.ok) {
    throw new Error("Failed to fetch Posts");
  }

  return userPosts;
}

async function UserArticles(userId: number) {
  const res = await fetch("http://127.0.0.1:8080/articles.json", {
    next: {
      revalidate: 60,
    },
  });
  const articles = await res.json();
  const userArticles = articles.filter(
    (article: IArticle) =>
      article.author == "John Doe" || article.author == "Michael Johnson",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Articles");
  }

  return userArticles;
}

async function UserEvents(userId: number) {
  const res = await fetch("http://127.0.0.1:8080/events.json", {
    next: {
      revalidate: 60,
    },
  });
  const events = await res.json();
  const userEvents = events.filter(
    (event: IEvent) => event.organizer == "John Taylor",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Articles");
  }

  return userEvents;
}

interface UserDetailProps {
  searchParams: string;
  params: string;
}

const UserDetailPage: NextPage<UserDetailProps> = async (props: any) => {
  const { userId } = props.params;
  const { user } = await getSingleUser(userId);
  const userPosts = await UserPosts(userId);
  const userArticles = await UserArticles(userId);
  const userEvents = await UserEvents(userId);

  if (!user) {
    notFound();
  }

  return (
    <div className="w-full flex items-center justify-center gap-10 -mt-10">
      <Suspense fallback={<LoadingUser myProfile={false} />}>
        <Profile
          user={user}
          other={true}
          posts={userPosts}
          articles={userArticles}
          events={userEvents}
        />
      </Suspense>
    </div>
  );
};

export default UserDetailPage;
