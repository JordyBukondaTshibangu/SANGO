"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { PostT } from "@/components/posts/container/PostsList";
import PostCard from "@/components/posts/regular/PostCard";
import { ArticleT } from "@/components/articles/container/Article";
import ArticleCard from "@/components/articles/regular/ArticleCard";
import { EventT } from "@/components/events/container/EventList";
import EventCard from "@/components/events/regular/EventCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <div className="py-4">{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type ProfileActivityProps = {
  posts: PostT[];
  articles: ArticleT[];
  events: EventT[];
};

const ProfileActivity: React.FC<ProfileActivityProps> = ({
  posts,
  articles,
  events,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Posts" {...a11yProps(0)} className="text-grayFirst" />
          <Tab label="Articles" {...a11yProps(1)} className="text-grayFirst" />
          <Tab label="Events" {...a11yProps(2)} className="text-grayFirst" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {posts.length > 0 ? (
          posts.map((post: PostT, index: number) => (
            <PostCard key={index} post={post} />
          ))
        ) : (
          <h1 className="text-4xl font-medium">No Post Found</h1>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex flex-wrap gap-4">
          {articles.length > 0 ? (
            articles.map((article: ArticleT, index: number) => (
              <ArticleCard key={index} article={article} />
            ))
          ) : (
            <h1 className="text-4xl font-medium">No Article Found</h1>
          )}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="flex flex-wrap gap-4">
          {events.length > 0 ? (
            events.map((event: EventT, index: number) => (
              <EventCard key={index} event={event} />
            ))
          ) : (
            <h1 className="text-4xl font-medium">No Article Found</h1>
          )}
        </div>
      </CustomTabPanel>
    </Box>
  );
};

export default ProfileActivity;
