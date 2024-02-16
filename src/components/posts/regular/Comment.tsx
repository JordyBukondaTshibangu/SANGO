import React from "react";
import Image from "next/image";
import { CommentT } from "../container/PostsList";
import PublicIcon from "@mui/icons-material/Public";
import { formatDate } from "@/utils/formatDate";

type CommentProps = {
  comment: CommentT;
};
const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="flex gap-4 p-5">
      <div className="flex justify-center items-center rounded-full w-8 lg:w-14 h-6 lg:h-12">
        <Image
          src={comment.profile}
          width={200}
          height={200}
          alt=""
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="bg-dark w-full rounded-md p-4 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <h4 className="text-xs lg:text-sm font-bold">
              {comment.author.name} Steve Matthew
            </h4>
            <p className="text-xs lg:text-[14px]">
              {comment.author.position}C.E.O at Fireworkx
            </p>
          </div>
          <p className="flex items-center gap-1 lg:gap-2">
            <span className="text-[8px] lg:text-xs">
              {formatDate(comment.createdAt)}
            </span>
            <PublicIcon className="text-xs lg:text-sm" />
          </p>
        </div>
        <p className="text-sm lg:text-[16px] leading-7">{comment.text}</p>
      </div>
    </div>
  );
};

export default Comment;
