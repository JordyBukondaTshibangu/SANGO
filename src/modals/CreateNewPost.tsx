// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const user = {
  id: 2390239032,
  name: "Jordy Tshibangu",
  email: "charlotte7@example.com",
  position: "Business owner | Entrepreneur",
  profile: "/assets/profile_five.jpg",
};
const likes: number = 0;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreateNewPost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [showTags, setShowTags] = useState<boolean>(false);
  const [showAddImage, setShowAddImage] = useState<boolean>(false);

  const handleAddTag = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (tag) {
      setTags((prevState) => [...prevState, tag]);
      setTag("");
    }
  };
  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) setFile(files[0]);
  };
  const handlePost = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const post = {
      title,
      content,
      publishedAt: new Date().toString(),
      author: user,
      tags,
      image: "",
      comments: [],
      likes: 0,
    };

    console.log(post);
  };

  return (
    <div className="flex flex-col gap-12 py-4">
      <div className="flex gap-3 items-center border-b-2 border-solid pb-5 border-dark">
        <PostAddOutlinedIcon className="text-4xl text-grayFirst" />
        <input
          type="text"
          className="bg-darkHeader text-3xl font-medium outline-none text-grayFirst"
          placeholder="Post title"
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
      </div>
      <textarea
        className="bg-darkHeader border border-solid border-darkHeader outline-none text-white px-5 text-2xl rounded-lg"
        cols={5}
        rows={16}
        value={content}
        placeholder="What's in your mind Jordy?"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setContent(event.target.value)
        }
      ></textarea>
      <Tooltip title="Add Image" placement="top">
        <Button
          component="label"
          className="lg:w-fit flex justify-center items-cente"
          // onClick={handleUploadFile}
          startIcon={
            <ImageOutlinedIcon className="text-sm lg:text-lg leading-none" />
          }
        >
          <VisuallyHiddenInput type="file" />
        </Button>
      </Tooltip>
      <span
        className="text-lg text-grayFirst font-medium cursor-pointer"
        onClick={() => setShowTags(!showTags)}
      >
        Click to add tag for more relevance in your post
      </span>
      {showTags && (
        <div className="flex flex-col gap-3 -mt-8">
          <h4 className="text-lg font-medium text-grayFirst">Tags:</h4>
          <ul className="flex gap-2 flex-wrap">
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-dark px-5 py-2 rounded-lg text-grayFirst text-sm min-w-max"
              >
                {tag}
              </span>
            ))}
          </ul>
          <div className="flex items-center mt-5">
            <input
              type="text"
              name="tag"
              className="bg-darkHeader text-grayFirst px-2 border border-dark outline-none w-fit h-10"
              value={tag}
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setTag(event.target.value)
              }
            />
            <button
              className="bg-dark flex items-center justify-center  px-4 py-3 text-sm text-white"
              onClick={handleAddTag}
            >
              add tag
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-end border-t border-solid border-dark py-4">
        <button
          type="submit"
          className="w-56 h-12 bg-darkHeader text-grayFirst border-2 border-dark border-solid rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition duration-300 ease-in-out"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreateNewPost;
