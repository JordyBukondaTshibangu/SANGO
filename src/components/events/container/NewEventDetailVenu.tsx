import React from "react";
import NewEventImage from "../regular/NewEventImage";

const NewEventDetailVenu = () => {
  return (
    <div className=" bg-white  dark:bg-darkHeader px-10 py-10 rounded-lg flex flex-col">
      <h2 className="text-xl font-medium">Venue Details </h2>
      <NewEventImage />
    </div>
  );
};

export default NewEventDetailVenu;
