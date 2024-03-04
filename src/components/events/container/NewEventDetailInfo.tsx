import React, { ChangeEvent, useState } from "react";

type NewEventDetailInfoProps = {
  addEventInfo: (
    venue: string,
    location: string,
    guests: number,
    category: string,
    description: string,
    tags: string[],
  ) => void;
};
const NewEventDetailInfo: React.FC<NewEventDetailInfoProps> = ({
  addEventInfo,
}) => {
  const [venue, setVenue] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [guests, setGuests] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (tag) {
      setTags((prevState) => [...prevState, tag]);
      setTag("");
    }
  };

  const handleEventDetails = () => {
    addEventInfo(venue, location, guests, category, description, tags);
  };

  return (
    <div className=" bg-white  dark:bg-darkHeader px-5 lg:px-10 py-10 rounded-lg flex flex-col gap-10">
      <h2 className="text-xl font-medium">Event Details </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="Venue">Venue*</label>
          <input
            type="text"
            name="venue"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-4"
            value={venue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setVenue(event.target.value);
              handleEventDetails();
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="location">Location*</label>
          <input
            type="text"
            name="location"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-4"
            value={location}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setLocation(event.target.value);
              handleEventDetails();
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            name="guests"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-4"
            value={guests}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setGuests(Number(event.target.value));
              handleEventDetails();
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="category">Category*</label>
          <input
            type="text"
            name="category"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-4"
            value={category}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setCategory(event.target.value);
              handleEventDetails();
            }}
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
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader px-5 py-2"
            value={description}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              setDescription(event.target.value);
              handleEventDetails();
            }}
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="tags">Tags</label>
          <ul className="flex gap-2 flex-wrap">
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-light dark:bg-dark px-5 py-2 rounded-lg text-grayFirst text-sm min-w-max"
              >
                {tag}
              </span>
            ))}
          </ul>
          <div className="flex items-center mt-5">
            <input
              type="text"
              name="tag"
              className=" bg-white  dark:bg-darkHeader text-grayFirst px-2 borderborder-grayFour dark:border-dark outline-none w-fit h-10"
              value={tag}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setTag(event.target.value?.toUpperCase())
              }
            />
            <button
              type="button"
              className="bg-light dark:bg-dark flex items-center justify-center  px-4 py-3 text-sm text-white"
              onClick={handleAddTag}
            >
              Add tag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEventDetailInfo;
