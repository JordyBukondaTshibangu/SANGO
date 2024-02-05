import React from 'react'
import EventHero from '@/components/events/container/EventHero'
import EventList from '@/components/events/container/EventList'

async function getEvents(){
  const res = await fetch('http://127.0.0.1:8080/events.json');

  if (!res.ok) {
    throw new Error('Failed to fetch Events')
  }

  return res.json()
}


const EventsPage = async () => {

  const events = await getEvents();

  console.log(events)

  return (
    <div className='flex flex-col gap-10'>
      <EventHero />
      <EventList events={events} />
    </div>
  )
}

export default EventsPage