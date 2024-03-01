"use client";
import React, { useState } from "react";

type NewJobDetailListProps = {
  name: string;
  addItems: (items: string[]) => void;
};
const NewJobDetailList: React.FC<NewJobDetailListProps> = ({
  name,
  addItems,
}) => {
  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState<string>("");

  const handleAdditem = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (item) {
      setItems((prevState) => [...prevState, item]);
      addItems(items);
      setItem("");
    }
  };
  return (
    <div className=" bg-white  dark:bg-darkHeader px-5 lg:px-10 py-10 rounded-lg flex flex-col justify-between gap-5">
      <label htmlFor="guests">{name}</label>
      <ul className="flex flex-col gap-2 list-disc px-5">
        {items.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="tags"
          className="bg-light dark:bg-dark border border-solidborder-grayFour dark:border-darkHeader h-8 lg:h-12 px-4"
          value={item}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setItem(event.target.value)
          }
        />
        <button
          type="button"
          className="w-fit bg-light dark:bg-dark flex items-center justify-center  px-5 py-3 text-sm text-white"
          onClick={handleAdditem}
        >
          Add {name}
        </button>
      </div>
    </div>
  );
};

export default NewJobDetailList;
