import React from 'react'
import EventCard from '../regular/EventCard'

export type Event = {
  id : number
  name: string,
  venue: string,
  date: string,
  location: string,
  description: string,
  email: string,
  category: string,
  image : string,
  tags: string[]
}

type EventListProps = {
    events : Event[]
}
const ArticleList: React.FC<EventListProps> = ({ events }) => {
  console.log(events)
  return (
    <div className='flex flex-col gap-10'>
      <h4 className='text-xl font-bold'>Latest events</h4>
      <div className="flex flex-wrap gap-10">
        {
          events.map((event:Event) => <EventCard key={event.id} event={event} />)
        }
      </div>  
    </div> 
  )
}

export default ArticleList