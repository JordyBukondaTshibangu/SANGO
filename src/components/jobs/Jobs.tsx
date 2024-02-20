"use client";
import React, {
  useState,
  KeyboardEvent,
  MouseEvent,
  Fragment,
  useEffect,
} from "react";
import JobFilter from "./regular/JobFilter";
import JobPopularSearch from "./container/JobPopularSearch";
import JobsList from "./container/JobsList";
import JobSidebarFilter from "./regular/JobSidebarFilter";
import Button from "@mui/material/Button";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";

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
};
const JobContainer: React.FC<JobContainerProps> = ({ jobs }) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [jobList, setJobList] = useState<JobT[]>(jobs);
  const [industryList, setIndustryList] = useState<string[]>([]);
  const [rolesList, setRolesList] = useState<string[]>([]);

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

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <JobFilter searchJob={searchJob} searchLocation={searchLocation} />
        {(["left"] as const).map((anchor) => (
          <Fragment key={anchor}>
            <Button
              className="bg-graySecond w-32 lg:w-48 h-12 lg:h-14 rounded-lg cursor-pointer flex justify-center items-center gap-4 text-xl text-white"
              onClick={toggleDrawer(anchor, true)}
            >
              <TuneOutlinedIcon className="text-xl font-bold" />
              <span className="text-sm lg:text-lg font-medium">Filters</span>
            </Button>
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
          </Fragment>
        ))}
      </div>

      <JobPopularSearch popularSearches={popularSearch} />
      <JobsList jobs={jobList} />
    </div>
  );
};

export default JobContainer;
