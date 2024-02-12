/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { PostT } from '../container/PostsList';
import Myprofile from '../../../../public/assets/profile.jpeg'
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Link from 'next/link';
import { FaNewspaper, FaRegCalendarAlt,FaUsers, FaBriefcase, FaBell } from "react-icons/fa";

// Logged in User


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const NewPost = () => {
  return (
    <div className="flex flex-col gap-4 bg-darkHeader rounded-lg">
      <div className="flex flex-col gap-8  px-5 lg:px-10 py-8">
        <div className="flex justify-center items-center rounded-full w-14 lg:w-20 h-12 lg:h-20">
          <Image src={Myprofile} width={200} height={200} alt='' className='w-full h-full rounded-full object-cover' />
        </div>
        <h4 className='text-2xl lg:text-3xl font-medium'>What's on your mind   🧠 ...</h4>
      </div>
      <div className="flex flex-col items-start gap-5 lg:gap-3  py-4 px-5 lg:py-10">
          <div className="w-full flex flex-col gap-4">
              <Link href='/posts/create-post' className="w-full min-h-20 lg:min-h-16 bg-dark rounded-md lg:rounded-3xl cursor-pointer flex items-center px-5 lg:px-10">
                <p>Write a new Post...</p>
              </Link>
              <div className="flex items-center justify-between mt-4">
                <Button component="label"  className='lg:w-fit flex justify-center items-center' startIcon={<ImageOutlinedIcon className='text-sm lg:text-lg leading-none'/>}>
                  <VisuallyHiddenInput type="file" />
                </Button>
            <Link href='/articles/create-article' className='flex gap-4 items-center hover:bg-dark px-4 py-3 rounded-xl'>
              <FaNewspaper className='text-lg' />
              <span className='hidden xl:flex'>Write an Article</span>
                </Link>
            <Link href='/events/create-event' className='flex gap-4 items-center hover:bg-dark px-4 py-3 rounded-xl'>
              <FaRegCalendarAlt className='text-lg'/>
              <span className='hidden xl:flex'>Organize an Event</span>
                </Link>
            </div>
          </div>  
      </div>
    </div>
  )
}

export default NewPost