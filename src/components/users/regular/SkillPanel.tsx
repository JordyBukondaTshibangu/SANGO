import React from "react";

type SkillPanelProps = {
  skills: { skill: string; proficienty: number }[];
};

const SkillPanel: React.FC<SkillPanelProps> = ({ skills }) => {
  return (
    <div className="w-full min-w-[350px] md:min-w-[300px] lg:min-w-[200px] 3xl:min-w-[350px] flex flex-col gap-4 mt-5">
      <div className="bg-dark p-5 rounded-lg flex flex-col gap-4">
        <h4 className="text-[16px] font-medium border-b border-primary border-solid w-fit">
          My Skills
        </h4>
        {skills.map(
          (skill: { skill: string; proficienty: number }, index: number) => (
            <div key={index} className="flex flex-col gap-2">
              <span>{skill.skill}</span>
              <div className="bg-darkHeader h-3 rounded-lg w-[100%]">
                <div
                  className={`bg-primary h-2 rounded-l-lg`}
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

export default SkillPanel;
