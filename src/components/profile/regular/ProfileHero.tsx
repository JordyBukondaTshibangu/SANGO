"use client";
import React, { useState } from "react";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "../../../../public/assets/Avatar.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RoomIcon from "@mui/icons-material/Room";
import Tooltip from "@mui/material/Tooltip";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import EditMyDetails from "@/modals/profile/EditMyDetails";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

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

type ProfileHeroProps = {
  profile: string;
  firstname: string;
  lastname: string;
  position: string;
  company: string;
  email: string;
  birthday: string;
  gender: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phoneNumber: string;
  other: boolean;
};

const ProfileHero: React.FC<ProfileHeroProps> = ({
  profile,
  firstname,
  lastname,
  position,
  company,
  email,
  birthday,
  address,
  phoneNumber,
  other,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [viewMoreDetails, setViewMore] = useState<boolean>(true);
  const userAddress = `${address.street} ${address.city} ${address.state} ${address.country}`;
  const heroImg =
    "https://images.unsplash.com/photo-1674027444454-97b822a997b6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" bg-white  dark:bg-darkHeader w-full rounded-lg pb-5">
      <div
        className="relative bg-cover bg-no-repeat  flex flex-col  gap-5 md:gap-10 p-5 lg:p-10 justify-end min-h-[300px] rounded-tr-lg rounded-tl-lg"
        style={{ backgroundImage: `url(${profile ? profile : heroImg})` }}
      >
        <Tooltip title="Update my cover">
          <AddAPhotoIcon className="absolute right-5 bottom-3 cursor-pointer text-3xl text-darkHeader hover:text-primary transition duration-300 ease-linear" />
        </Tooltip>
      </div>
      <div className="relative flex flex-col gap-5 px-5 lg:px-10 pb-5 ">
        <div className="relative self-center lg:self-start w-48 h-48 rounded-full p-1  bg-white dark:bg-darkHeader -mt-24">
          <Image
            src={profile ? profile : Avatar}
            width={200}
            height={200}
            alt="profile"
            className="h-full w-full rounded-full"
          />
          <Tooltip title="Update my profile">
            <AddAPhotoIcon className="absolute right-1 bottom-7 cursor-pointer text-2xl hover:text-primary transition duration-300 ease-linear" />
          </Tooltip>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-between">
          <h4 className="text-2xl font-bold">
            {firstname} {lastname}
          </h4>
          <div className="flex flex-col gap-6 items-end">
            {!other && (
              <Tooltip title="Edit my details" placement="top">
                <CreateOutlinedIcon
                  className="cursor-pointer"
                  onClick={handleOpen}
                />
              </Tooltip>
            )}
            <h5 className="lg:text-lg lg:self-end">500 Network partners</h5>
            {other && <Button
              variant="contained"
              className="bg-primary px-5 py-3 flex items-start justify-center text-md"
              endIcon={<AddCircleOutlineIcon />}
            >
              Connect 2 {firstname}
            </Button>}
          </div>
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
              <EditMyDetails
                firstname={firstname}
                lastname={lastname}
                position={position}
                company={company}
                birthday={birthday}
                address={address}
                phoneNumber={phoneNumber}
                onClose={handleClose}
              />
            </Box>
          </Fade>
        </Modal>

        <div className="flex items-center gap-2">
          <EmailIcon className="text-lg lg:text-xl" />
          <h5 className="text-lg lg:text-xl">{email}</h5>
        </div>
        <h5 className="lg:text-lg">
          {position} at {company}
        </h5>
      </div>
      <div
        className="flex lg:hidden items-center"
        onClick={() => setViewMore(!viewMoreDetails)}
      >
        <span className="px-5 py-2">
          {viewMoreDetails ? "View Less" : "View More"}
        </span>
        <RemoveRedEyeOutlinedIcon className="text-lg" />
      </div>
      {viewMoreDetails && (
        <div className="flex flex-col gap-5 px-5 lg:px-10 py-5 lg:pb-5">
          <div className="flex items-center gap-2">
            <CalendarMonthIcon className="text-lg lg:text-xl" />
            <h5 className="text-md lg:text-lg">{birthday}</h5>
          </div>
          <div className="flex items-center gap-2">
            <LocalPhoneIcon className="text-lg lg:text-xl" />
            <h5 className="text-md lg:text-lg">{phoneNumber}</h5>
          </div>
          <div className="flex items-center gap-2">
            <RoomIcon className="text-lg lg:text-xl" />
            <h5 className="text-md lg:text-lg">{userAddress}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHero;
