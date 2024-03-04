import React, { ChangeEvent, useState } from "react";

type NewEventDetailHostProps = {
  addHostDetails: (
    organiser: string,
    email: string,
    phoneNumber: string,
  ) => void;
};

const NewEventDetailHost: React.FC<NewEventDetailHostProps> = ({
  addHostDetails,
}) => {
  const [organiser, setOrganiser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleEventDetails = () =>
    addHostDetails(organiser, email, phoneNumber);

  return (
    <div className=" bg-white  dark:bg-darkHeader px-5 lg:px-10 py-10 rounded-lg flex flex-col gap-10">
      <h2 className="text-xl font-medium">Host Details </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="Organiser">Organiser*</label>
          <input
            type="text"
            name="Organiser"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-4"
            value={organiser}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setOrganiser(event.target.value);
              handleEventDetails();
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="Email">Email*</label>
          <input
            type="email"
            name="Email"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-4"
            value={email}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
              handleEventDetails();
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="phone">Phone number*</label>
          <input
            type="text"
            name="phone"
            className="bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-10 lg:h-12 px-4"
            value={phoneNumber}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPhoneNumber(event.target.value);
              handleEventDetails();
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="phone" className="hidden">
            Phone number*
          </label>
          <input
            type="text"
            name="phone"
            className="hidden bg-light dark:bg-dark border border-solid border-grayFour dark:border-darkHeader h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default NewEventDetailHost;
