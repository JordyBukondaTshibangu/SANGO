"use client";
import React, { useState } from "react";
import Image from "next/image";
import AvatarImg from "../../../../public/assets/Avatar.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "../base/SearchBar";
import { FaPowerOff, FaMessage } from "react-icons/fa6";
import ProfilePic from "../../../../public/assets/profile.jpeg";
import {
  FaBars,
  FaHome,
  FaNewspaper,
  FaRegCalendarAlt,
  FaUsers,
  FaBriefcase,
  FaBell,
} from "react-icons/fa";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState<Boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentPath = usePathname();

  return (
    <nav className="bg-darkHeader fixed z-50 top-0 left-0 right-0 w-full flex justify-center items-center h-[107px] shadow-md px-5 py-5 xl:px-10 2xl:px-28 3xl:px-96 gap-10">
      <div className="mr-auto">
        <Link href="/posts" className="text-lg md:text-3xl font-bold">
          SANGO LOGO
        </Link>
      </div>
      <ul className="hidden xl:flex justify-between gap-16">
        <li>
          <Link
            href="/posts"
            className={
              currentPath == "/posts"
                ? "flex flex-col items-center gap-1 text-primary"
                : "flex flex-col items-center gap-1 hover:text-primary"
            }
          >
            <FaHome className="text-2xl font-bold" />
            <span className="text-xs">Posts</span>
          </Link>
        </li>
        <li>
          <Link
            href="/articles"
            className={
              currentPath == "/articles"
                ? "flex flex-col items-center gap-1 text-primary"
                : "flex flex-col items-center gap-1 hover:text-primary"
            }
          >
            <FaNewspaper className="text-2xl font-bold" />
            <span className="text-xs">Articles</span>
          </Link>
        </li>
        <li>
          <Link
            href="/events"
            className={
              currentPath == "/events"
                ? "flex flex-col items-center gap-1 text-primary"
                : "flex flex-col items-center gap-1 hover:text-primary"
            }
          >
            <FaRegCalendarAlt className="text-2xl font-bold" />
            <span className="text-xs">Events</span>
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className={
              currentPath == "/users"
                ? "flex flex-col items-center gap-1 text-primary"
                : "flex flex-col items-center gap-1 hover:text-primary"
            }
          >
            <FaUsers className="text-2xl font-bold" />
            <span className="text-xs">My Network</span>
          </Link>
        </li>
        <li>
          <Link
            href="/jobs"
            className={
              currentPath == "/jobs"
                ? "flex flex-col items-center gap-1 text-primary"
                : "flex flex-col items-center gap-1 hover:text-primary"
            }
          >
            <FaBriefcase className="text-2xl font-bold" />
            <span className="text-xs">Jobs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/messages"
            className={
              currentPath == "/messages"
                ? "flex flex-col items-center gap-1 text-primary"
                : "flex flex-col items-center gap-1 hover:text-primary"
            }
          >
            <MessageOutlinedIcon className="text-2xl font-bold" />
            <span className="text-xs">Messages</span>
          </Link>
        </li>
        <li>
          <Link
            href="/notifications"
            className={
              currentPath == "/notifications"
                ? "flex flex-col items-center gap-1 text-primary"
                : "flex flex-col items-center gap-1 hover:text-primary"
            }
          >
            <FaBell className="text-2xl font-bold" />
            <span className="text-xs">Notification</span>
          </Link>
        </li>
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={handleClick}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <span className="w-8 h-8 rounded-full bg-black">
            <Image
              src={AvatarImg}
              width={20}
              height={20}
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </span>
          <span className="text-xs">Profile</span>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> <Link href="/my-profile">Profile</Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <Link href="/sign-in">Logout</Link>
            </MenuItem>
          </Menu>
        </div>
      </ul>
      <div className="hidden md:flex gap-5 ml-auto">
        <SearchBar />
      </div>
      <div
        className="flex xl:hidden text-lg cursor-pointer"
        onClick={() => setToggleNav(!toggleNav)}
      >
        <FaBars />
      </div>
      {toggleNav && (
        <div
          className="absolute lg:hidden top-0 bottom-0 left-0 right-0 overlay bg-darkHeader z-10 py-10 flex flex-col gap-14  px-10"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <div className="cursor-pointer flex text-2xl text-white">
            <FaBars />
          </div>
          <div className="border-b-2 border-gray-400">
            <Link href="/my-profile" className="flex  items-center gap-5">
              <span className="w-16 h-16 rounded-full bg-white">
                <Image
                  src={ProfilePic}
                  width={200}
                  height={200}
                  alt="Profile Picture"
                  className="w-full h-full rounded-full"
                />
              </span>
              <p className="flex flex-col gap-2">
                <span className="text-[16px] font-bold text-white">
                  Jordy Tshibangu
                </span>
                <span className="text-xs text-gray-400">
                  Software developer
                </span>
              </p>
            </Link>
          </div>
          <hr />
          <ul className="relative  flex flex-col justify-between gap-16">
            <li>
              <Link
                href="/posts"
                className="flex items-center gap-5 text-white"
              >
                <FaHome className="text-2xl font-bold" />
                <span className="text-sm">Posts</span>
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className="flex items-center gap-5 text-white"
              >
                <FaBriefcase className="text-2xl font-bold" />
                <span className="text-sm">Articles</span>
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="flex items-center gap-5 text-white"
              >
                <FaRegCalendarAlt className="text-2xl font-bold" />
                <span className="text-sm">Events</span>
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="flex items-center gap-5 text-white"
              >
                <FaUsers className="text-2xl font-bold" />
                <span className="text-sm">My Network</span>
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="flex items-center gap-5 text-white">
                <FaBriefcase className="text-2xl font-bold" />
                <span className="text-sm">Jobs</span>
              </Link>
            </li>
            <li>
              <Link
                href="/messages"
                className="flex items-center gap-5 text-white"
              >
                <FaMessage className="text-2xl font-bold" />
                <span className="text-sm">Messages</span>
              </Link>
            </li>
            <li>
              <Link
                href="/notifications"
                className="flex items-center gap-5 text-white"
              >
                <FaBell className="text-2xl font-bold" />
                <span className="text-sm">Notification</span>
              </Link>
            </li>
            <li>
              <Link
                href="/sign-in"
                className="flex items-center gap-5 text-white"
              >
                <FaPowerOff className="text-2xl font-bold" />
                <span className="text-sm">Log out</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
