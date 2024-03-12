import React from "react";
import EventHero from "@/components/events/container/EventHero";
import EventList from "@/components/events/container/EventList";
import pickRandomObject from "@/utils/randomItem";

async function getEvents() {
  const res = await fetch("http://127.0.0.1:8080/events.json", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Events");
  }

  return res.json();
}

const EventsPage = async () => {
  const events = await getEvents();
  const event = pickRandomObject(events);

  return (
    <div className="flex flex-col gap-10">
      <EventHero event={event} />
      <EventList events={events} />
    </div>
  );
};

export default EventsPage;
