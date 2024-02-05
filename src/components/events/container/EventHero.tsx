'use client'
import React from 'react'
import Chip from '@mui/material/Chip';
import RoomIcon from '@mui/icons-material/Room';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const ArticleHero = () => {

  const handleClick = () => {
      console.info('You clicked the Chip.');
  };
    
  return (
    <div className="relative bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] min-h-[550px] rounded-xl flex flex-col  gap-5 md:gap-10 p-5 lg:p-10">
      <Chip label="Upcoming" onClick={handleClick} className='bg-primary w-32 flex items-center justify-center py-2 px-3 rounded-2xl text-white text-[16px] hover:bg-black'/>
      <h1 className='mt-auto text-2xl lg:text-5xl font-medium lg:leading-[46px] lg:w-2/3 text-white'>Kendrick lamar and Heyneibhoors welcome you all</h1>
      <div className="flex flex-col md:flex-row md:items-center gap-5 lg:gap-8 text-white">
        <h6 className='flex items-center gap-2 text-sm lg:text-lg'>
          <CalendarMonthIcon />
          <span>Mon, 26th Feb</span>
        </h6>
        <h5 className='flex items-center gap-2 text-lg lg:text-xl font-bold'>
          <RoomIcon />
          <span>Tracey wilson</span>
        </h5>
      </div>
    </div>
  )
}

export default ArticleHero
