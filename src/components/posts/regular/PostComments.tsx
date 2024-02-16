"use client";
import React, { useState } from "react";
import { CommentT } from "../container/PostsList";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Comment from "./Comment";

type PostCommentsProps = {
  comments: CommentT[];
};
const PostComments: React.FC<PostCommentsProps> = ({ comments }) => {
  const [relevance, setRelevance] = useState<string>("recent");
  const [showReplies, setShowReplies] = useState<boolean>(false);
  const [listComments, setListComments] = useState<CommentT[]>(comments);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    setRelevance(selectedValue);

    if (selectedValue === "recent") {
      const recentList = [...listComments].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
      setListComments(recentList);
    } else if (selectedValue === "relevant") {
      const relevantList = [...listComments].sort((a, b) => b.likes - a.likes);
      setListComments(relevantList);
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-5">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className="text-grayFirst">
          Relevance
        </InputLabel>
        <Select
          value={relevance}
          onChange={handleChange}
          label="Relevance"
          className="w-48 text-grayFirst"
        >
          <MenuItem value="recent">Most Recent</MenuItem>
          <MenuItem value="relevant">Most Relevant</MenuItem>
        </Select>
      </FormControl>
      <div className="flex flex-col gap-4">
        {listComments.length > 0 &&
          listComments.map((comment, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Comment comment={comment} />
              <div className="px-20 lg:px-24 flex gap-2">
                <span className="text-xs lg:text-sm">
                  {comment.likes} Likes
                </span>
                <span className="text-xs lg:text-sm">|</span>
                <span
                  className="text-xs lg:text-sm hover:underline cursor-pointer"
                  onClick={() => setShowReplies(!showReplies)}
                >
                  {comment.replies.length} Replies
                </span>
              </div>
              <div className="ml-5 lg:ml-20 flex flex-col gap-4">
                {showReplies &&
                  comment.replies.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostComments;
