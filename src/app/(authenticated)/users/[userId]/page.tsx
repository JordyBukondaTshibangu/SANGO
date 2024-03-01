import { ArticleT } from "@/components/articles/container/Article";
import { EventT } from "@/components/events/container/EventList";
import { PostT } from "@/components/posts/container/PostsList";
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

async function UserPosts(userId: number) {
  const res = await fetch("http://127.0.0.1:8080/posts.json", {
    cache: "no-cache",
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

async function UserEvents(userId: number) {
  const res = await fetch("http://127.0.0.1:8080/events.json", {
    cache: "no-cache",
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

  return (
    <div className="w-full flex items-center justify-center gap-10 -mt-10">
      <Profile
        user={user}
        other={true}
        posts={userPosts}
        articles={userArticles}
        events={userEvents}
      />
    </div>
  );
};

export default UserDetailPage;
