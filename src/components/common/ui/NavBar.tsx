"use client";
import React, { useContext, useState } from "react";
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
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { ThemeContext } from "@/app/context/Theme";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff",
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff",
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const NavBar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

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
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
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
      <div className="hidden md:flex gap-5 ml-auto">
        <SearchBar />
      </div>
      <div
        className="flex xl:hidden text-lg cursor-pointer"
        onClick={() => setToggleNav(!toggleNav)}
      >
        <FaBars />
      </div>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            defaultChecked
            onChange={toggleTheme}
          />
        }
        label=""
      />
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
