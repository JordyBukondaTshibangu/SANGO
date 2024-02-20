import React from "react";
import { PostT } from "../container/PostsList";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import PostReactionPanel from "./PostReactionPanel";
import Link from "next/link";

type PostCardProps = {
  post: PostT;
};
const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, publishedAt, content, image, likes, comments, author } = post;
  const { id, profile, name, position } = author;
  return (
    <div className="w-full bg-darkHeader px-5 py-10 flex flex-col gap-10 rounded-md shadow-md">
      <div className="flex gap-5 items-center">
        <div className="flex justify-center items-center rounded-full w-20 h-20">
          <Image
            src={profile}
            width={200}
            height={200}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href={`/users/${id}`}
            className="text-xl font-bold hover:underline"
          >
            {name}
          </Link>
          <div className="flex flex-col">
            <p>{position}</p>
            <p className="flex items-center gap-2">
              <span className="text-xs">{publishedAt}</span>
              <PublicIcon className="text-sm" />
            </p>
          </div>
        </div>
      </div>
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-[16px] leading-8">{content}</p>
      <div className="w-full max-h-[700px]">
        <Image
          src={image}
          width={220}
          height={40}
          alt="post_image"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <PostReactionPanel likes={likes} comments={comments} post={post} />
    </div>
  );
};

export default PostCard;
