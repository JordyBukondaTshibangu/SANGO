import React, { ReactElement } from "react";
import Link from "next/link";
import { Avatar } from "@mui/material";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  link: string;
  linkName: string;
  icon: ReactElement;
};
const NavLink: React.FC<NavLinkProps> = ({ link, linkName, icon }) => {
  const currentPath = usePathname();

  return (
    <li>
      <Link
        href={`/${link}`}
        className={
          currentPath.startsWith(`/${link}`)
            ? "flex lg:flex-col items-center gap-5 lg:gap-2 text-primary"
            : "flex lg:flex-col items-center gap-5 lg:gap-2 hover:text-primary"
        }
      >
        <Avatar
          className={
            currentPath.startsWith(`/${link}`)
              ? " text-primary bg-black lg:bg-white dark:bg-darkHeader text-2xl"
              : " hover:text-primary bg-black lg:bg-white dark:bg-darkHeader text-white lg:text-lightFontColor dark:text-fontColor text-2xl "
          }
        >
          {icon}
        </Avatar>
        <span className="text-sm">{linkName}</span>
      </Link>
    </li>
  );
};

export default NavLink;
