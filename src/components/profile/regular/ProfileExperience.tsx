"use client";
import React, { useState } from "react";
import { UserExperienceT } from "../container/Profile";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import Experience from "./Experience";
import Tooltip from "@mui/material/Tooltip";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import EditMyExperience from "@/modals/profile/EditMyExperience";

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

type ProfileExperienceProps = {
  experiences: UserExperienceT[];
  other: boolean;
};
const ProfileExperience: React.FC<ProfileExperienceProps> = ({
  experiences,
  other,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-full  bg-white  dark:bg-darkHeader px-5 py-10 flex flex-col gap-8">
      <div className="w-full flex gap-4 items-center">
        <ViewTimelineIcon className="text-3xl" />
        <h4 className="text-2xl font-bold">{!other && "My"} Experience</h4>
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
          <Box
            sx={style}
            className=" bg-white  dark:bg-darkHeader max-h-[95vh] overflow-auto"
          >
            <EditMyExperience experiences={experiences} onClose={handleClose} />
          </Box>
        </Fade>
      </Modal>
      <div className="w-full flex flex-col gap-4 ">
        {experiences.map((experience: UserExperienceT, index: number) => (
          <Experience key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ProfileExperience;
