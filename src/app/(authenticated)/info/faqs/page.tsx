/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import FaqImg from "../../../../../public/assets/Undraw/faq.svg";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqsPages = () => {
  return (
    <div className="flex flex-col gap-20 xl:px-32">
      <div className="flex items-center justify-center w-full mb-10">
        <Image src={FaqImg} width={300} height={300} alt="" />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl">Sango Homepage FAQ</h1>
        <p>
          The Sango experience was designed so you can easily surface ideas,
          drive conversations, and discover topics you care about. When you sign
          into Sango, you land on your homepage, which gives you access to your
          feed, connections, profile, messages, and notifications. Your Sango
          Feed contains posts from your network, companies you follow, and more.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Accordion className=" bg-white  dark:bg-darkHeader text-white px-5 py-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h4 className="text-lg font-medium">How do I search on Sango?</h4>
          </AccordionSummary>
          <AccordionDetails>
            <div className="px-5">
              <p>
                The Sango Search bar at the top of every page allows you to
                search for people, jobs, posts, companies, groups, and schools.
                You can click any of the search suggestions that appear in the
                dropdown list as you type or generate your search to see the
                full results. To search for jobs, you can click the Jobs icon in
                the homepage and search for jobs in the Jobs homepage.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className=" bg-white  dark:bg-darkHeader text-white px-5 py-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h4 className="text-lg font-medium">
              What features are within the top navigation bar and how do I
              access features I don't see in the navigation?
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <div className="px-5">
              <p>
                The Sango.com navigation bar is a simple menu of tabs located at
                the top of the Sango homepage that makes it easy to access
                various features quickly. The menu includes My Network, Jobs,
                Messaging, Notifications, Me, and Work.
              </p>
              <ul className="flex flex-col gap-3 mt-10">
                <li>
                  My Network allows you to manage your connections, invitations,
                  and groups,
                </li>
                <li>Jobs enable you to search and post job listings.</li>
                <li>Messaging is where you can access your messages</li>
                <li>
                  Notifications let you view updates about your connections.
                </li>
                <li>
                  Me is where you can view and edit your profile, manage account
                  settings, and access the Help Center.
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className=" bg-white  dark:bg-darkHeader text-white px-5 py-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h4 className="text-lg font-medium">
              What features are within the top navigation bar and how do I
              access features I don't see in the navigation?
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <div className="px-5">
              <p>
                The Sango.com navigation bar is a simple menu of tabs located at
                the top of the Sango homepage that makes it easy to access
                various features quickly. The menu includes My Network, Jobs,
                Messaging, Notifications, Me, and Work.
              </p>
              <ul className="flex flex-col gap-3 mt-10">
                <li>
                  My Network allows you to manage your connections, invitations,
                  and groups,
                </li>
                <li>Jobs enable you to search and post job listings.</li>
                <li>Messaging is where you can access your messages</li>
                <li>
                  Notifications let you view updates about your connections.
                </li>
                <li>
                  Me is where you can view and edit your profile, manage account
                  settings, and access the Help Center.
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqsPages;
