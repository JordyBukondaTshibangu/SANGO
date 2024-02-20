import { ArticleT } from "@/components/articles/container/Article";
import { EventT } from "@/components/events/container/EventList";
import { PostT } from "@/components/posts/container/PostsList";
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

async function UserPosts() {
  const res = await fetch("http://127.0.0.1:8080/posts.json", {
    cache: "no-cache",
  });
  const posts = await res.json();
  const userPosts = posts.filter((post: PostT) => post.author.id == 2390239032);

  if (!res.ok) {
    throw new Error("Failed to fetch Posts");
  }

  return userPosts;
}

async function UserArticles() {
  const res = await fetch("http://127.0.0.1:8080/articles.json", {
    cache: "no-cache",
  });
  const { articles } = await res.json();
  const userArticles = articles.filter(
    (article: ArticleT) =>
      article.author == "John Doe" || article.author == "Michael Johnson",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Articles");
  }

  return userArticles;
}

async function UserEvents() {
  const res = await fetch("http://127.0.0.1:8080/events.json", {
    cache: "no-cache",
  });
  const events = await res.json();
  const userEvents = events.filter(
    (event: EventT) =>
      event.organiser == "John Taylor" 
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
      <Profile
        user={user}
        other={false}
        posts={userPosts}
        articles={userArticles}
        events={userEvents}
      />
      <UserList users={usersList} />
    </div>
  );
};

export default MyProfilePage;
