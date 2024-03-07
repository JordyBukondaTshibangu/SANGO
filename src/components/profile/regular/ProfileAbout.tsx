"use client";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import Tooltip from "@mui/material/Tooltip";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import EditMyInfo from "@/modals/profile/EditMyInfo";

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

type ProfileAboutProps = {
  bio: string;
  other: boolean;
};
const ProfileAbout: React.FC<ProfileAboutProps> = ({ bio, other }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full  bg-white  dark:bg-darkHeader rounded-lg flex flex-col gap-5 px-5 py-10">
      <div className="w-full flex gap-4 items-center">
        <PersonIcon className="text-3xl" />
        <h4 className="text-2xl font-bold">About {!other && "me"}</h4>
        {!other && (
          <Tooltip title="Edit my info" placement="top">
            <CreateOutlinedIcon
              className="cursor-pointer"
              onClick={handleOpen}
            />
          </Tooltip>
        )}
      </div>
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
            <EditMyInfo onClose={handleClose} bio={bio} />
          </Box>
        </Fade>
      </Modal>
      <p className="text-md leading-8">{bio}</p>
    </div>
  );
};

export default ProfileAbout;
