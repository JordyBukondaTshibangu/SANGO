import React from "react";
import { UserSkillT } from "../container/Profile";
import DiamondIcon from "@mui/icons-material/Diamond";

type ProfileSkillsProps = {
  skills: UserSkillT[];
  other: boolean;
};
const ProfileSkills: React.FC<ProfileSkillsProps> = ({ skills, other }) => {
  return (
    <div className="w-full  bg-white  dark:bg-darkHeader rounded-lg px-5 py-10 flex flex-col gap-10">
      <div className="w-full flex gap-4 items-center">
        <DiamondIcon className="text-3xl" />
        <h4 className="text-2xl font-bold">{!other && "My"} Skills</h4>
      </div>
      <div className="flex flex-col gap-4">
        {skills.map(
          (skill: { skill: string; proficienty: number }, index: number) => (
            <div key={index} className="flex flex-col gap-4">
              <span>{skill.skill}</span>
              <div className="bg-light dark:bg-dark h-3 rounded-lg w-[100%]">
                <div
                  className={`bg-arsenic h-3 rounded-l-lg`}
                  style={{ width: `${skill.proficienty}%` }}
                ></div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default ProfileSkills;
