import Profile from "@/components/profile/container/Profile";
import UserList from "@/components/profile/container/UserList";
import React, { Suspense } from "react";
import LoadingUser from "../users/[userId]/loading";
import { IUser } from "@/interfaces/user";
import { IArticle } from "@/interfaces/article";
import { IEvent } from "@/interfaces/event";
import { IPost } from "@/interfaces/post";

async function getUsers() {
  const res = await fetch("http://127.0.0.1:8080/users.json", {
    next: {
      revalidate: 60,
    },
  });
  const users = await res.json();
  const user = users[0];
  const usersList = users.filter((us: IUser) => us.id !== 2390239032);

  if (!res.ok) {
    throw new Error("Failed to fetch Users");
  }

  return { usersList, user };
}

async function UserPosts() {
  const res = await fetch("http://127.0.0.1:8080/posts.json", {
    next: {
      revalidate: 60,
    },
  });
  const posts = await res.json();
  const userPosts = posts.filter((post: IPost) => post.author.id == 2390239032);

  if (!res.ok) {
    throw new Error("Failed to fetch Posts");
  }

  return userPosts;
}

async function UserArticles() {
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

async function UserEvents() {
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

const MyProfilePage = async () => {
  const { user, usersList } = await getUsers();
  const userPosts = await UserPosts();
  const userArticles = await UserArticles();
  const userEvents = await UserEvents();

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:-mt-10">
      <Suspense fallback={<LoadingUser myProfile={true} />}>
        <Profile
          user={user}
          other={false}
          posts={userPosts}
          articles={userArticles}
          events={userEvents}
        />
        <UserList users={usersList} />
      </Suspense>
    </div>
  );
};

export default MyProfilePage;
