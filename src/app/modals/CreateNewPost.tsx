// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const user = {
  id: 2390239032,
  name: "Jordy Tshibangu",
  email: "charlotte7@example.com",
  position: "Business owner | Entrepreneur",
  profile: "/assets/profile_five.jpg",
};
const likes: number = 0;

const CreateNewPost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

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
    // const formData = new FormData();

    // formData.append('title', title);
    // formData.append('content', content);
    // formData.append('publishedAt', publishedAt);
    // formData.append('likes', likes);
    // formData.append('author', user);
    // formData.append('tags', tags);
    // formData.append('comments', []);
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-3 items-center border-b-2 border-solid pb-5 border-darkHeader">
        <PostAddOutlinedIcon className="text-4xl" />
        <input
          type="text"
          className="bg-dark text-3xl font-medium outline-none"
          placeholder="ADD NEW POST"
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
      </div>
      <div>
        {/* <img src={file} width={200} height={200} alt='post image' /> */}
      </div>
      <div className="flex items-center gap-3">
        <ImageOutlinedIcon className="text-4xl" />
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleUploadFile}
        />
      </div>
      <textarea
        className="bg-darkHeader px-5 py-4 text-lg rounded-lg"
        cols={5}
        rows={10}
        value={content}
        placeholder="What's in your mind Jordy?"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setContent(event.target.value)
        }
      ></textarea>
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-medium">Tags:</h4>
        <ul className="flex gap-2">
          {tags.map((tag: string, index: number) => (
            <span key={index} className="bg-darkHeader px-3 py-1 rounded-lg">
              {tag}
            </span>
          ))}
        </ul>
        <div className="flex items-center">
          <input
            type="text"
            name="tag"
            className="bg-dark px-2 border border-darkHeader outline-none w-fit h-10"
            value={tag}
            required
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTag(event.target.value)
            }
          />
          <button
            className="bg-darkHeader flex items-center justify-center  px-4 py-3 text-sm text-white"
            onClick={handleAddTag}
          >
            add tag
          </button>
        </div>
      </div>
      <div className="flex justify-end border-t border-solid border-darkHeader py-5">
        <Button
          type="submit"
          variant="contained"
          className="w-48 h-10 bg-primary rounded-lg"
          onClick={handlePost}
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default CreateNewPost;
