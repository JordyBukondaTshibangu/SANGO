/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import CreateNewPost from "@/modals/CreateNewPost";
import Myprofile from "../../../../public/assets/profile.jpeg";
import { FaNewspaper, FaRegCalendarAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

// Logged in User

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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  borderRadius: 2,
  border: "1px solid #1b1c28",
  boxShadow: 24,
  p: 4,
};

const NewPost = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col gap-4  bg-white  dark:bg-darkHeader rounded-lg">
      <div className="flex flex-col gap-8  px-5 lg:px-10 py-8">
        <div className="flex justify-center items-center rounded-full w-14 lg:w-20 h-12 lg:h-20">
          <Image
            src={Myprofile}
            width={200}
            height={200}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h4 className="text-2xl lg:text-3xl font-medium">
          What's on your mind 🧠 ...
        </h4>
      </div>
      <div className="flex flex-col items-start gap-5 lg:gap-3  py-4 px-5 lg:py-10">
        <div className="w-full flex flex-col gap-4">
          <div
            className="hidden w-full min-h-20 lg:min-h-16 bg-light  dark:bg-dark rounded-md lg:rounded-3xl cursor-pointer lg:flex items-center px-5 lg:px-10"
            onClick={handleOpen}
          >
            <p>Write a new Post...</p>
          </div>
          <Link
            href="/posts/create-post"
            className="w-full min-h-20 lg:min-h-16 bg-light dark:bg-dark rounded-md lg:rounded-3xl cursor-pointer flex items-center px-5 lg:px-10 lg:hidden"
          >
            <p>Write a new Post...</p>
          </Link>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style} className=" bg-white  dark:bg-darkHeader">
                <CreateNewPost onClose={handleClose} />
              </Box>
            </Fade>
          </Modal>
          <div className="flex items-center justify-between mt-4">
            <Link
              href="/jobs/create-job"
              className="flex gap-4 items-center bg-light hover: dark:bg-dark px-4 py-3 rounded-xl"
            >
              <FaBriefcase className="text-lg leading-none" />
              <span className="hidden xl:flex">Create a Job</span>
            </Link>
            <Link
              href="/articles/create-article"
              className="flex gap-4 items-center bg-light hover: dark:bg-dark px-4 py-3 rounded-xl"
            >
              <FaNewspaper className="text-lg leading-none" />
              <span className="hidden xl:flex">Write an Article</span>
            </Link>
            <Link
              href="/events/create-event"
              className="flex gap-4 items-center bg-light hover: dark:bg-dark px-4 py-3 rounded-xl"
            >
              <FaRegCalendarAlt className="text-lg leading-none" />
              <span className="hidden xl:flex">Organize an Event</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
