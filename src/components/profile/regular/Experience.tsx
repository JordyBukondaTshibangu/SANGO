import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserExperienceT } from "../container/Profile";

type ExperienceProps = {
  experience: UserExperienceT;
};
const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const { jobPosition, description, company, year } = experience;
  return (
    <Accordion className="bg-light dark:bg-dark text-lightFontColor dark:text-graySecond py-2">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {jobPosition} - @{company} | {year}
      </AccordionSummary>
      <AccordionDetails>{description}</AccordionDetails>
    </Accordion>
  );
};

export default Experience;
