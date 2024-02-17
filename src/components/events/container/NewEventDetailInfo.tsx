import React from "react";

const NewEventDetailInfo = () => {
  return (
    <div className="bg-darkHeader px-5 lg:px-10 py-10 rounded-lg flex flex-col gap-10">
      <h2 className="text-xl font-medium">Event Details </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="Venue">Venue*</label>
          <input
            type="text"
            name="venue"
            className="bg-dark border border-solid border-darkHeader h-10 lg:h-12"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="location">Location*</label>
          <input
            type="text"
            name="location"
            className="bg-dark border border-solid border-darkHeader h-10 lg:h-12"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            name="guests"
            className="bg-dark border border-solid border-darkHeader h-10 lg:h-12"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="category">Category*</label>
          <input
            type="text"
            name="category"
            className="bg-dark border border-solid border-darkHeader h-10 lg:h-12"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="guests">Description</label>
          <textarea
            name="description"
            rows={5}
            cols={10}
            className="bg-dark border border-solid border-darkHeader"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            name="tags"
            className="bg-dark border border-solid border-darkHeader h-10 lg:h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default NewEventDetailInfo;
