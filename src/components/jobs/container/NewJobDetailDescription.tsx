import React, { ChangeEvent, useState } from "react";

type NewJobDetailDescriptionProps = {
  addDescription: (value: string) => void;
};
const NewJobDetailDescription: React.FC<NewJobDetailDescriptionProps> = ({
  addDescription,
}) => {
  const [description, setDescription] = useState<string>("");
  return (
    <div className="bg-darkHeader px-5 lg:px-10 py-10 rounded-lg flex flex-col md:flex-row justify-between gap-10">
      <div className="flex-1 flex flex-col gap-2">
        <label htmlFor="guests">Description</label>
        <textarea
          name="description"
          rows={5}
          cols={10}
          className="bg-dark border border-solid border-darkHeader p-4"
          required
          value={description}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
            setDescription(event.target.value);
            addDescription(description);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default NewJobDetailDescription;
