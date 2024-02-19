"use client";
import React, { useEffect, useState } from "react";
import EventCard from "../regular/EventCard";
import Link from "next/link";
import EventFilter from "../regular/EventFilter";

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
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [eventList, setEventList] = useState<EventT[]>(events);
  const [organisers, setOrganisers] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    let listEvents: string[] = [];
    events.forEach((event) => {
      listEvents.push(event.organiser);
    });
    setOrganisers(listEvents);

    let listCategories: string[] = [];
    events.forEach((event) => {
      listCategories.push(event.category);
    });
    setCategories(listCategories);

    let listDates: string[] = [];
    events.forEach((event) => {
      listDates.push(event.date);
    });
    setDates(listDates);
  }, [events, setEventList, setCategories]);

  const handleClearFilter = () => {
    setEventList(events);
  };

  const searchEvent = (search: string) => {
    let updatedEvents = eventList.filter((event) =>
      event.name.toLowerCase().includes(search.toLowerCase()),
    );
    setEventList(updatedEvents);
  };

  const searchOrganiser = (author: string) => {
    let updatedEvents = eventList.filter(
      (event) => event.organiser.toLowerCase() === author.toLowerCase(),
    );
    setEventList(updatedEvents);
  };

  const searchCategory = (category: string) => {
    let updatedEvents = eventList.filter(
      (event) => event.category.toLowerCase() === category.toLowerCase(),
    );
    setEventList(updatedEvents);
  };

  const searchDate = (date: string) => {
    let updatedEvents = eventList.filter(
      (event) => event.date.toLowerCase() === date.toLowerCase(),
    );
    setEventList(updatedEvents);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center gap-5">
        <h4 className="text-xl font-bold">Latest Events</h4>
        <Link
          href="/events/create-event"
          className="ml-auto flex items-center justify-center px-5 py-2 bg-primary rounded-xl text-white cursor-pointer"
        >
          Organise an event
        </Link>
        <span
          className="flex items-center justify-center px-5 py-2 bg-darkHeader rounded-xl text-white cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          {!showFilter ? "Show" : "Hide"} Filter
        </span>
      </div>
      {showFilter && (
        <div className="flex items-center">
          <EventFilter
            organisers={organisers}
            categories={categories}
            dates={dates}
            searchEvent={searchEvent}
            searchOrganiser={searchOrganiser}
            searchCategory={searchCategory}
            searchDate={searchDate}
          />
          <span
            className="min-w-max w-fit flex items-center justify-center px-6 py-4 bg-darkHeader rounded-xl text-white cursor-pointer h-full"
            onClick={handleClearFilter}
          >
            Clear Filter
          </span>
        </div>
      )}
      <div className="flex flex-wrap gap-10">
        {eventList.map((event: EventT) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
