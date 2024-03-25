import Event from "@/components/events/container/Event";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import LoadingEvent from "./loading";
import { IEvent } from "@/interfaces/event";

export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:8080/events.json");
  const events = await res.json();

  return events.map((event: IEvent) => ({ id: event.id }));
}
async function getSingleEvent(eventId: number) {
  const res = await fetch("http://127.0.0.1:8080/events.json", {
    next: {
      revalidate: 60,
    },
  });
  const events = await res.json();

  const event = events?.filter(
    (item: IEvent) => item.id === Number(eventId),
  )[0];

  if (!res.ok) {
    throw new Error("Failed to fetch Events");
  }

  return event;
}

interface EventDetailPageProps {
  searchParams: string;
  params: string;
}
const EventDetailPage: NextPage<EventDetailPageProps> = async (props: any) => {
  const { eventId } = props.params;

  const event = await getSingleEvent(eventId);

  if (!event) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingEvent />}>
      <Event event={event} />
    </Suspense>
  );
};

export default EventDetailPage;
