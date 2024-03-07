"use client";
import { UserExperienceT } from "@/components/profile/container/Profile";
import Experience from "@/components/profile/regular/Experience";
import React, { ChangeEvent, useState } from "react";

type EditMyExperienceProps = {
  experiences: UserExperienceT[];
  onClose: () => void;
};
const EditMyExperience: React.FC<EditMyExperienceProps> = ({
  experiences,
  onClose,
}) => {
  const [position, setPosition] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [experiencesList, setExperiences] =
    useState<UserExperienceT[]>(experiences);

  const handleNewExperience = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (position && description && company && year) {
      setExperiences((prevState) => [
        ...prevState,
        { jobPosition: position, description, company, year },
      ]);
      console.log(experiences);
      const uniqueExperience: Set<UserExperienceT> = new Set(experiencesList);
      console.log(uniqueExperience);
      // setExperiences([...uniqueExperience])
      setPosition("");
      setDescription("");
      setCompany("");
      setYear(0);
    }
  };

  const handleUpdateMyDetails = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <form
      className="flex flex-col gap-12 py-4"
      onSubmit={handleUpdateMyDetails}
    >
      <h2 className="text-xl font-medium ">My Experience </h2>
      <div className="w-full flex flex-col gap-4">
        {experiencesList.map((experience: UserExperienceT, index: number) => (
          <Experience key={index} experience={experience} />
        ))}
      </div>
      <div className="w-full flex flex-col gap-8">
        <h3 className="text-lg font-medium">Add Experience</h3>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1 flex flex-col gap-4">
            <label htmlFor="position">Position*</label>
            <input
              type="text"
              name="position"
              className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
              value={position}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setPosition(event.target.value);
              }}
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              min={0}
              max={100}
              name="company"
              className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
              value={company}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setCompany(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1 flex flex-col gap-4">
            <label htmlFor="year">Year*</label>
            <input
              type="number"
              min={0}
              max={100}
              name="year"
              className="text-lightFontColor dark:text-fontColor bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-3"
              value={year}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setYear(Number(event.target.value));
              }}
            />
          </div>
          <div className="flex-1 flex flex-col gap-4"></div>
        </div>
        <div className="flex flex-col justify-between gap-4">
            <label htmlFor="Description">Description*</label>
          <textarea
            name="Description"
            rows={5}
            className="w-full bg-light dark:bg-dark text-lightFontColor dark:text-fontColor px-2 py-2 text-lg leading-10"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
        </div>
        <button
          onClick={handleNewExperience}
          className="w-56 h-12  bg-light dark:bg-dark text-dark dark:text-grayFirst  rounded-lg text-lg font-medium"
        >
          Add Experience
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

export default EditMyExperience;
