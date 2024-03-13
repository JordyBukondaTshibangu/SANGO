"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
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
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const [toggleNav, setToggleNav] = useState<Boolean>(false);
  const [mounted, setMounded] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    setMounded(true);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentPath = usePathname();

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed z-50 top-0 left-0 right-0 bg-white dark:bg-darkHeader w-full flex justify-center items-center h-[107px] shadow-md px-5 py-5 xl:px-10 2xl:px-28 3xl:px-96 gap-10">
      <div className="mr-auto text-primary">
        <Link href="/posts" className="text-lg md:text-3xl font-bold">
          SANGO
        </Link>
      </div>
      <ul className="hidden xl:flex justify-between gap-16">
        <li>
          <Link
            href="/posts"
            className={
              currentPath.startsWith("/posts")
                ? "flex flex-col items-center gap-2 text-primary"
                : "flex flex-col items-center gap-2 hover:text-primary"
            }
          >
            <FaHome className="text-2xl font-bold" />
            <span className="text-xs lg:text-sm">Posts</span>
          </Link>
        </li>
        <li>
          <Link
            href="/articles"
            className={
              currentPath.startsWith("/articles")
                ? "flex flex-col items-center gap-2 text-primary"
                : "flex flex-col items-center gap-2 hover:text-primary"
            }
          >
            <FaNewspaper className="text-2xl font-bold" />
            <span className="text-xs lg:text-sm">Articles</span>
          </Link>
        </li>
        <li>
          <Link
            href="/events"
            className={
              currentPath.startsWith("/events")
                ? "flex flex-col items-center gap-2 text-primary"
                : "flex flex-col items-center gap-2 hover:text-primary"
            }
          >
            <FaRegCalendarAlt className="text-2xl font-bold" />
            <span className="text-xs lg:text-sm">Events</span>
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className={
              currentPath.startsWith("/users")
                ? "flex flex-col items-center gap-2 text-primary"
                : "flex flex-col items-center gap-2 hover:text-primary"
            }
          >
            <FaUsers className="text-2xl font-bold" />
            <span className="text-xs lg:text-sm">My Network</span>
          </Link>
        </li>
        <li>
          <Link
            href="/jobs"
            className={
              currentPath.startsWith("/jobs")
                ? "flex flex-col items-center gap-2 text-primary"
                : "flex flex-col items-center gap-2 hover:text-primary"
            }
          >
            <FaBriefcase className="text-2xl font-bold" />
            <span className="text-xs lg:text-sm">Jobs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/messages"
            className={
              currentPath.startsWith("/messages")
                ? "flex flex-col items-center gap-2 text-primary"
                : "flex flex-col items-center gap-2 hover:text-primary"
            }
          >
            <MessageOutlinedIcon className="text-2xl font-bold" />
            <span className="text-xs lg:text-sm">Messages</span>
          </Link>
        </li>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <span className="w-8 h-8 rounded-full" onClick={handleClick}>
            <Image
              src={AvatarImg}
              width={16}
              height={16}
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </span>
          <span className="text-xs lg:text-sm" onClick={handleClick}>
            Profile
          </span>
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
            <MenuItem>
              <ListItemIcon>
                <NotificationsIcon fontSize="small" />
              </ListItemIcon>
              <Link href="/notifications">Notification</Link>
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
      <SearchBar />
      <div
        className="flex xl:hidden text-lg cursor-pointer"
        onClick={() => setToggleNav(!toggleNav)}
      >
        <FaBars />
      </div>
      <span className="cursor-pointer">
        {theme === "dark" ? (
          <Brightness4OutlinedIcon onClick={() => setTheme("light")} />
        ) : (
          <LightModeOutlinedIcon onClick={() => setTheme("dark")} />
        )}
      </span>
      {toggleNav && (
        <div
          className="fixed lg:hidden top-0 bottom-0 left-0 right-0 z-50 overlay  bg-black  dark:bg-darkHeader py-10 flex flex-col gap-14  px-10 overflow-hidden text-white dark:text-fontColor"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <div className="border-b-2 border-gray-400 bg-black  dark:bg-darkHeader flex justify-between">
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
                <span className="text-[16px] font-bold ">Jordy Tshibangu</span>
                <span className="text-xs text-gray-400">
                  Software developer
                </span>
              </p>
            </Link>
            <div className="cursor-pointer flex text-2xl">
              <CloseOutlinedIcon className="text-2xl" />
            </div>
          </div>
          <ul className="relative bg-black  dark:bg-darkHeader flex flex-col justify-between gap-16">
            <li>
              <Link href="/posts" className="flex items-center gap-5 ">
                <FaHome className="text-2xl font-bold" />
                <span className="text-sm">Posts</span>
              </Link>
            </li>
            <li>
              <Link href="/articles" className="flex items-center gap-5 ">
                <FaBriefcase className="text-2xl font-bold" />
                <span className="text-sm">Articles</span>
              </Link>
            </li>
            <li>
              <Link href="/events" className="flex items-center gap-5 ">
                <FaRegCalendarAlt className="text-2xl font-bold" />
                <span className="text-sm">Events</span>
              </Link>
            </li>
            <li>
              <Link href="/users" className="flex items-center gap-5 ">
                <FaUsers className="text-2xl font-bold" />
                <span className="text-sm">My Network</span>
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="flex items-center gap-5 ">
                <FaBriefcase className="text-2xl font-bold" />
                <span className="text-sm">Jobs</span>
              </Link>
            </li>
            <li>
              <Link href="/messages" className="flex items-center gap-5 ">
                <FaMessage className="text-2xl font-bold" />
                <span className="text-sm">Messages</span>
              </Link>
            </li>
            <li>
              <Link href="/notifications" className="flex items-center gap-5 ">
                <FaBell className="text-2xl font-bold" />
                <span className="text-sm">Notification</span>
              </Link>
            </li>
            <li>
              <Link href="/sign-in" className="flex items-center gap-5 ">
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
