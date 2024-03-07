"use client";
import { UserSkillT } from "@/components/profile/container/Profile";
import React, { ChangeEvent, useState } from "react";

type EditMySkillsProps = {
  onClose: () => void;
  skills: UserSkillT[];
};
const EditMySkills: React.FC<EditMySkillsProps> = ({ skills, onClose }) => {
  const [newSkill, setNewSkill] = useState<string>("");
  const [proficiency, setProficiency] = useState<number>(0);
  const [skillsList, setSkills] = useState<UserSkillT[]>(skills);

  const handleAddNewSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (newSkill && proficiency && proficiency < 100) {
      setSkills((prevState) => [
        ...prevState,
        { skill: newSkill, proficiency },
      ]);
      console.log(skillsList);
      const uniqueSkill: Set<UserSkillT> = new Set(skillsList);
      console.log(uniqueSkill);
      // setSkills([...uniqueSkill])
      setNewSkill("");
      setProficiency(0);
    }
  };
  const handleUpdateMyDetails = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <form
      className="flex flex-col gap-20 py-4"
      onSubmit={handleUpdateMyDetails}
    >
      <h2 className="text-xl font-medium ">My Skills </h2>
      <div className="flex flex-col gap-6 max-h-[400px] overflow-auto">
        {skillsList.map(
          (skill: { skill: string; proficiency: number }, index: number) => (
            <div key={index} className="flex flex-col gap-4">
              <span>{skill.skill}</span>
              <div className="bg-light dark:bg-dark h-3 rounded-lg w-[100%]">
                <div
                  className={`bg-coral dark:bg-arsenic h-3 rounded-l-lg`}
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ),
        )}
      </div>
      <div className="w-full flex flex-col gap-10">
        <h3 className="text-lg font-medium">Add new skill</h3>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1 flex flex-col gap-4">
            <label htmlFor="NewSkill">Skill*</label>
            <input
              type="text"
              name="Skill"
              className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
              value={newSkill}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setNewSkill(event.target.value);
              }}
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <label htmlFor="updatedLastName">Proficiency ( 0 - 100 )*</label>
            <input
              type="number"
              min={0}
              max={100}
              name="updatedLastName"
              className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
              value={proficiency}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setProficiency(Number(event.target.value));
              }}
            />
          </div>
        </div>
        <button
          onClick={handleAddNewSkill}
          className="w-32 h-10  bg-light dark:bg-dark text-dark dark:text-grayFirst  rounded-lg text-lg font-medium"
        >
          Add Skill
        </button>
      </div>
      <div className="flex justify-end py-4">
        <button
          type="submit"
          className="w-56 h-12  bg-primary dark:bg-dark text-white dark:text-grayFirst border-2border-grayFour dark:border-dark border-solid rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition duration-300 ease-in-out"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default EditMySkills;
