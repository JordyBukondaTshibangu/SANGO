"use client";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 z-5  bg-white  dark:bg-darkHeader py-10 md:py-20 px-5 xl:px-10 2xl:px-28 3xl:px-96 flex flex-col gap-32">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-3 xl:grid-cols-5 xl:gap-20 justify-center">
        <div className="flex flex-col gap-5">
          <h5 className="text-lg text-lightFontColor dark:text-fontColor">Quick Links</h5>
          <ul className="flex flex-col gap-5 text-lightFontColor dark:text-fontColor">
            <li>
              <Link className="hover:text-primary" href="/info/about-us">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/info/contact-us">
                Contact us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary"
                href="/info/community-guidelines"
              >
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary"
                href="/info/privacy-terms-and-conditions"
              >
                Privacy & Terms
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/info/faqs">
                Faqs
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h5 className="text-lg text-lightFontColor dark:text-fontColor">Accessibity</h5>
          <ul className="flex flex-col gap-5 text-lightFontColor dark:text-fontColor">
            <li>
              <Link className="hover:text-primary" href="/posts">
                Posts
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/users">
                Users
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/articles">
                Articles
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/events">
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h5 className="text-lg text-lightFontColor dark:text-fontColor">Career</h5>
          <ul className="flex flex-col gap-5 text-lightFontColor dark:text-fontColor">
            <li>
              <Link className="hover:text-primary" href="/jobs">
                Find a Job
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="contact-us">
                Post a Job
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="articles">
                Browse Candidates
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/events">
                Saved Jobs
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h5 className="text-lg text-lightFontColor dark:text-fontColor">Sango</h5>
          <ul className="flex flex-col gap-5 text-lightFontColor dark:text-fontColor">
            <li>
              <Link className="hover:text-primary" href="/about-us">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="contact-us">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="articles">
                Articles
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/events">
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <Link className="hover:text-primary" href="/posts">
            Sango
          </Link>
          <div className="flex gap-3">
            <p className="text-sm text-lightFontColor dark:text-fontColor">Call now:</p>
            <a href="/" className="text-sm text-lightFontColor dark:text-fontColor font-medium">
              (+27) 68 286 6579
            </a>
          </div>
          <p className="text-sm text-gray-400">
            87 Park Road Wynberg, Cape Town, South Africa, 7800
          </p>
        </div>
      </div>
      <div className="xl:-mx-96 border-t-2 border-white">
        <div className="py-4 flex flex-col md:flex-row justify-between xl:px-96 gap-10">
          <p className="text-sm text-gray-300">
            2024 Sango - All rights reserved
          </p>
          <div className="flex flex-col md:flex-row text-lightFontColor dark:text-fontColor gap-5">
            <a
              className="flex items-center gap-4 text-lg rounded-full"
              href="/facebook.com"
            >
              <FacebookOutlinedIcon />
            </a>
            <a
              className="flex items-center gap-4 text-lg"
              href="/instagram.com"
            >
              <InstagramIcon />
            </a>
            <a className="flex items-center gap-4 text-lg" href="/twitter.com">
              <TwitterIcon />
            </a>
            <a className="flex items-center gap-4 text-lg" href="/twitter.com">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
