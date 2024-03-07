"use client";
import React, { useState } from "react";
import { UserSkillT } from "../container/Profile";
import DiamondIcon from "@mui/icons-material/Diamond";
import Tooltip from "@mui/material/Tooltip";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import EditMySkills from "@/modals/profile/EditMySkills";

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

type ProfileSkillsProps = {
  skills: UserSkillT[];
  other: boolean;
};
const ProfileSkills: React.FC<ProfileSkillsProps> = ({ skills, other }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full  bg-white  dark:bg-darkHeader rounded-lg px-5 py-10 flex flex-col gap-10">
      <div className="w-full flex gap-4 items-center">
        <DiamondIcon className="text-3xl" />
        <h4 className="text-2xl font-bold">{!other && "My"} Skills</h4>
{ !other &&         <Tooltip title="Edit my skills" placement="top">
          <CreateOutlinedIcon className="cursor-pointer" onClick={handleOpen} />
        </Tooltip>}
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
            className=" bg-white  dark:bg-darkHeader max-h-[90vh]"
          >
            <EditMySkills onClose={handleClose} skills={skills} />
          </Box>
        </Fade>
      </Modal>

      <div className="flex flex-col gap-4">
        {skills.map(
          (skill: { skill: string; proficiency: number }, index: number) => (
            <div key={index} className="flex flex-col gap-4">
              <span>{skill.skill}</span>
              <div className="bg-light dark:bg-dark h-3 rounded-lg w-[100%]">
                <div
                  className={`bg-coral dark:bg-arsenic h-3 rounded-l-lg`}
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default ProfileSkills;
