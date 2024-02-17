import React from "react";
import NewEventDetailTiming from "@/components/events/container/NewEventDetailTiming";
import NewEventDetailInfo from "@/components/events/container/NewEventDetailInfo";
import NewEventDetailHost from "@/components/events/container/NewEventDetailHost";
import NewEventDetailVenu from "@/components/events/container/NewEventDetailVenu";

const CreateEventPage = () => {
  return (
    <div className="w-full lg:max-w-5xl mx-auto flex flex-col gap-10 xl:-my-10">
      <NewEventDetailTiming />
      <NewEventDetailInfo />
      <NewEventDetailHost />
      <NewEventDetailVenu />
    </div>
  );
};

export default CreateEventPage;
