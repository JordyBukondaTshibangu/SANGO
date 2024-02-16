import React from "react";
import EventCard from "../regular/EventCard";

export type EventT = {
  id: number;
  name: string;
  venue: string;
  date: string;
  location: string;
  description: string;
  email: string;
  organiser: string;
  phone: string;
  category: string;
  image: string;
  tags: string[];
  guests: number;
  gallery: string[];
};

type EventListProps = {
  events: EventT[];
};
const ArticleList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="flex flex-col gap-10">
      <h4 className="text-xl font-bold">Latest events</h4>
      <div className="flex flex-wrap gap-10">
        {events.map((event: EventT) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
