'use client'
import React from 'react'
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

const ArticleHero = () => {

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    
    
  return (
    <div className="bg-[url('https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/womenwithlaptopdatacenter_0.jpg?itok=wtUKd0U7')] min-h-[550px] rounded-xl flex flex-col  gap-5 md:gap-10 p-5 lg:p-10">
        <Chip label="Technolgy" onClick={handleClick} className='mt-auto bg-primary w-32 flex items-center justify-center py-2 px-3 rounded-md text-white text-[16px] hover:bg-black'/>
          <h1 className='text-2xl lg:text-4xl font-medium lg:leading-[46px] lg:w-3/5 text-white'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-5 lg:gap-8">
            <Avatar alt="Remy Sharp" src="" />
            <h5 className='text-lg lg:text-xl font-bold'>Tracey wilson</h5>
            <h6 className='text-sm lg:text-lg'>August 20,2024</h6>
          </div>
    </div>
  )
}

export default ArticleHero
