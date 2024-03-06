"use client";
import React, { useState } from "react";

type EditMyExperienceProps = {
  onClose: () => void;
};
const EditMyExperience: React.FC<EditMyExperienceProps> = ({ onClose }) => {
  const [aboutMe, setAboutMe] = useState<string>("");

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
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <textarea
          name="aboutMe"
          rows={20}
          cols={10}
          className="w-full bg-white dark:bg-dark border-none outline-none py-5 text-lg leading-10"
          value={aboutMe}
          onChange={(event) => setAboutMe(event.target.value)}
          required
        ></textarea>
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
