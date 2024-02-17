import React from "react";

const NewEventDetailHost = () => {
  return (
    <div className="bg-darkHeader px-5 lg:px-10 py-10 rounded-lg flex flex-col gap-10">
      <h2 className="text-xl font-medium">Host Details </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="Organiser">Organiser*</label>
          <input
            type="text"
            name="Organiser"
            className="bg-dark border border-solid border-darkHeader h-10 lg:h-12"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="Email">Email*</label>
          <input
            type="email"
            name="Email"
            className="bg-dark border border-solid border-darkHeader h-10 lg:h-12"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="phone">Phone number*</label>
          <input
            type="text"
            name="phone"
            className="bg-dark border border-solid border-darkHeader h-10 lg:h-12"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="phone" className="hidden">
            Phone number*
          </label>
          <input
            type="text"
            name="phone"
            className="hidden bg-dark border border-solid border-darkHeader h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default NewEventDetailHost;
