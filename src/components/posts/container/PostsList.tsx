import React from "react";
import PostCard from "../regular/PostCard";
import { IPost } from "@/interfaces/post";

type PostsListProps = {
  posts: IPost[];
};
const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-5">
      {posts.map((post: IPost) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
