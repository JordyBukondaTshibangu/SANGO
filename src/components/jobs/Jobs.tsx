"use client";
import React, { useState, KeyboardEvent, MouseEvent, useEffect } from "react";
import JobFilter from "./regular/JobFilter";
import JobPopularSearch from "./container/JobPopularSearch";
import JobsList from "./container/JobsList";
import JobSidebarFilter from "./regular/JobSidebarFilter";
import Button from "@mui/material/Button";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";

import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import JobDrawerFilter from "./regular/JobDrawerFilter";

const popularSearch = [
  "Front-end",
  "Back-end",
  "Development",
  "PHP",
  "Laravel",
  "React",
  "Vue",
  "Nuxt",
  "Next",
  "Developer",
  "Team Lead",
  "Javascript",
];

export type Anchor = "top" | "left" | "bottom" | "right";
const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

type JobType = {
  title: string;
  location: string;
  // Add other properties as needed
};

export type JobT = {
  id: number;
  title: string;
  period: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string;
  image: string;
  category: string;
  desirables: string[];
  benefits: string[];
};

type JobContainerProps = {
  jobs: JobT[];
  window: any;
};

const JobContainer: React.FC<JobContainerProps> = (props) => {
  const { jobs } = props;
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const [jobList, setJobList] = useState<JobT[]>(jobs);
  const [industryList, setIndustryList] = useState<string[]>([]);
  const [rolesList, setRolesList] = useState<string[]>([]);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    const listIndustry: string[] = [];
    jobs.forEach((job) => {
      listIndustry.push(job.category);
    });
    let industrySet: Set<string> = new Set(listIndustry);
    setIndustryList([...industrySet]);

    const listRoles: string[] = [];
    jobs.forEach((job) => {
      listRoles.push(job.title);
    });
    let rolesSet: Set<string> = new Set(listRoles);
    setRolesList([...rolesSet]);
  }, [jobs, setIndustryList, setRolesList]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      console.log("first");
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const searchFunction = (searchValue: string, field: keyof JobType) => {
    if (searchValue) {
      const updatedJobList = jobList.filter((job) =>
        job[field]
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()),
      );
      setJobList(updatedJobList);
    } else {
      setJobList(jobs);
    }
  };

  const searchJob = (search: string) => searchFunction(search, "title");
  const searchLocation = (location: string) =>
    searchFunction(location, "location");

  const handleApplyFilter = (
    datePosted: string,
    jobType: string,
    industry: string,
    experienceLevel: string,
    roles: string[],
  ) => {
    let updatedJobList = [...jobList];

    if (datePosted) {
      // do something
    }

    if (jobType) {
      updatedJobList = updatedJobList.filter(
        (job) => job.period.toLocaleLowerCase() === jobType.toLocaleLowerCase(),
      );
    }

    if (industry) {
      updatedJobList = updatedJobList.filter(
        (job) =>
          job.category.toLocaleLowerCase() === industry.toLocaleLowerCase(),
      );
    }

    if (experienceLevel) {
      // do something
    }

    if (roles) {
      // do something
      roles.forEach((role) => {
        updatedJobList = updatedJobList.filter(
          (job) => job.title.toLocaleLowerCase() === role.toLocaleLowerCase(),
        );
        setJobList(updatedJobList);
      });
    }
    setJobList(updatedJobList);
  };

  const handleClearFilter = () => {
    setJobList(jobs);
    window.location.reload();
  };

  const toggleDrawerMobile = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-10 lg:gap-5">
        <JobFilter searchJob={searchJob} searchLocation={searchLocation} />
        {(["left"] as const).map((anchor) => (
          <div key={anchor} className="w-full flex gap-5 justify-end">
            <Button
              className="hidden bg-graySecond w-32 lg:w-48 h-12 lg:h-14 rounded-lg cursor-pointer lg:flex justify-center items-center gap-4 text-xl text-white"
              onClick={toggleDrawer(anchor, true)}
            >
              <TuneOutlinedIcon className="text-xl font-bold" />
              <span className="text-sm lg:text-lg font-medium">Filters</span>
            </Button>
            <Button
              className="bg-graySecond w-32 lg:w-48 h-12 lg:h-14 rounded-lg cursor-pointer flex justify-center items-center gap-4 text-xl text-white lg:hidden"
              onClick={toggleDrawerMobile(true)}
            >
              <TuneOutlinedIcon className="text-xl font-bold" />
              <span className="text-sm lg:text-lg font-medium">Filters</span>
            </Button>
            <CssBaseline />
            <Global
              styles={{
                ".MuiDrawer-root > .MuiPaper-root": {
                  height: `calc(50% - ${drawerBleeding}px)`,
                  overflow: "visible",
                },
              }}
            />
            <SwipeableDrawer
              container={container}
              anchor="bottom"
              open={open}
              onClose={toggleDrawerMobile(false)}
              onOpen={toggleDrawerMobile(true)}
              swipeAreaWidth={drawerBleeding}
              disableSwipeToOpen={false}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <StyledBox
                className="bg-darkHeader"
                sx={{
                  position: "absolute",
                  top: -drawerBleeding,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  visibility: "visible",
                  right: 0,
                  left: 0,
                }}
              >
                <Puller />
                <div className="w-full flex lg:hidden px-10 gap-4 my-8  items-center">
                  <TuneOutlinedIcon className="text-white text-xl font-bold" />
                  <h2 className="text-md font-medium text-white uppercase">
                    Job Filters
                  </h2>
                </div>
              </StyledBox>
              <JobDrawerFilter
                industryList={industryList}
                rolesList={rolesList}
                anchor={anchor}
                state={state[anchor]}
                toggleDrawer={toggleDrawer}
                onClose={toggleDrawer(anchor, false)}
                applyFilter={handleApplyFilter}
              />
            </SwipeableDrawer>
            <Button
              className="bg-darkHeader min-w-max py-4 px-4 rounded-lg cursor-pointer flex justify-center items-center gap-4 text-xl text-white"
              onClick={handleClearFilter}
            >
              <FilterAltOffOutlinedIcon className="text-xl font-bold" />
              <span className="text-sm lg:text-lg font-medium min-w-max">
                Clear
              </span>
            </Button>
            <JobSidebarFilter
              industryList={industryList}
              rolesList={rolesList}
              anchor={anchor}
              state={state[anchor]}
              toggleDrawer={toggleDrawer}
              onClose={toggleDrawer(anchor, false)}
              applyFilter={handleApplyFilter}
            />
          </div>
        ))}
      </div>

      <JobPopularSearch popularSearches={popularSearch} />
      <JobsList jobs={jobList} />
    </div>
  );
};

export default JobContainer;
