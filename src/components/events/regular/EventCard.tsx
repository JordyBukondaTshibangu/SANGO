'use client'
import React from 'react'
import { Event } from '../container/EventList'
import Avatar from '@mui/material/Avatar';
import Image from 'next/image'
import ArticleImg from '../../../../public/assets/article.jpg'
import Link from 'next/link';import RoomIcon from '@mui/icons-material/Room';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

type EventCardProps = {
  event : Event
}

const ArticleCard: React.FC<EventCardProps> = ({ event }) => {    

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1576967402682-19976eb930f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] object-cover rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer flex-1 flex flex-col justify-end items-center gap-3 pb-10 min-w-[220px] lg:min-w-[248px] max-w-[348px] min-h-[394px] max-h-[394px]">
      <h1 className='lg:text-2xl font-medium mb-2'>{event.name}</h1>
      <h5 className='flex items-center gap-2 text-lg lg:text-xl font-bold'>
        <RoomIcon />
        <span>{event.location}</span>
      </h5>
      <h6 className='flex items-center gap-2 text-sm lg:text-lg'>
        <CalendarMonthIcon />
        <span>{event.date}</span>
      </h6>
    </div>
  )
}

export default ArticleCard