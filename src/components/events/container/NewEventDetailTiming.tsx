import React from "react";
import NewEventImage from "../regular/NewEventImage";
import NewEventDateTime from "../regular/NewEventDateTime";

const NewEventDetailTiming = () => {
  return (
    <div className="bg-darkHeader px-5 lg:px-10 py-10 rounded-lg flex flex-col">
      <input
        className="bg-darkHeader text-2xl lg:text-4xl font-medium outline-none"
        placeholder="Event name*"
      />
      <NewEventImage />
      <NewEventDateTime />
    </div>
  );
};

export default NewEventDetailTiming;
