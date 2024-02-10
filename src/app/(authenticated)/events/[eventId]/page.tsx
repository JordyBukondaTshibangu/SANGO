import Event from '@/components/events/container/Event';
import { EventT } from '@/components/events/container/EventList';
import { NextPage } from 'next';
import React from 'react'

async function getSingleEvent(eventId:number) {
  const res = await fetch('http://127.0.0.1:8080/events.json', { cache: 'no-cache' });
  const data = await res.json();


  const event = data?.filter((item: EventT) => item.id === Number(eventId))[0];

  if (!res.ok) {
    throw new Error('Failed to fetch Events')
  }

  return event;
}

interface EventDetailPageProps {
  searchParams : string,
  params : string
}
const EventDetailPage: NextPage<EventDetailPageProps> = async (props : any) => {
  
  const { eventId } = props.params;

  const event = await getSingleEvent(eventId);

  return <Event event={event} />
}

export default EventDetailPage