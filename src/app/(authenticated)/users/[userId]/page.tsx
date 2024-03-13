import { ArticleT } from "@/components/articles/container/Article";
import { EventT } from "@/components/events/container/EventList";
import { PostT } from "@/components/posts/container/PostsList";
import Profile, { UserT } from "@/components/profile/container/Profile";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import LoadingUser from "./loading";

export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:8080/users.json");
  const users = await res.json();

  return users.map((user: UserT) => ({ id: user.id }));
}
async function getSingleUser(userId: number) {
  const res = await fetch("http://127.0.0.1:8080/users.json", {
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();

  const user = data?.filter((item: UserT) => item.id === Number(userId))[0];
  const relatedUsers = data.filter((item: UserT) => item.id !== Number(userId));

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
  const userPosts = posts.filter((post: PostT) => post.author.id == userId);

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
    (article: ArticleT) =>
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
    (event: EventT) => event.organizer == "John Taylor",
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
      <Suspense fallback={<LoadingUser />}>
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
