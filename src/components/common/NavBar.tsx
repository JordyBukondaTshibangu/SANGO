import Link from 'next/link'
import React from 'react'
import { FaBars, FaHome, FaNewspaper, FaRegCalendarAlt,FaUsers, FaBriefcase, FaBell } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='sticky w-full flex justify-between items-center h-[87px] shadow-md px-5 xl:px-96 py-5' >
      <div>
        <Link href='/posts' className='text-lg md:text-3xl font-bold'>SANGO LOGO</Link>
      </div>
      <ul className='hidden xl:flex justify-between gap-16'>
        <li>
          <Link href='/posts' className='flex flex-col items-center gap-1'>
            <FaHome className='text-2xl font-bold'/>
            <span className='text-xs'>Posts</span>
          </Link>
        </li>
        <li>
          <Link href='/articles' className='flex flex-col items-center gap-1'>
            <FaBriefcase className='text-2xl font-bold'/>
            <span className='text-xs'>Articles</span>
          </Link>
        </li>
        <li>
          <Link href='/events' className='flex flex-col items-center gap-1'>
            <FaRegCalendarAlt className='text-2xl font-bold'/>
            <span className='text-xs'>Events</span>
          </Link>
        </li>
        <li>
          <Link href='/users' className='flex flex-col items-center gap-1'>
            <FaUsers  className='text-2xl font-bold'/>
            <span className='text-xs'>My Network</span>
          </Link>
        </li>
        <li>
          <Link href='/jobs' className='flex flex-col items-center gap-1'>
            <FaBriefcase className='text-2xl font-bold'/>
            <span className='text-xs'>Jobs</span>
          </Link>
        </li>
        <li>
          <Link href='/contact-us' className='flex flex-col items-center gap-1'>
            <FaBell className='text-2xl font-bold'/>
            <span className='text-xs'>Notification</span>
          </Link>
        </li>
        <li>
          <Link href='/my-profile' className='flex flex-col items-center gap-1'>
            <span className='w-7 h-7 rounded-full bg-black'></span>
            <span className='text-xs'>Notification</span>
          </Link>
        </li>
      </ul>
      <div className='hidden md:flex gap-5'>
        <div>Search Bar</div>
        <div>Swicth mode</div>
      </div>
      <div className='flex md:hidden text-lg'>
        <FaBars />
      </div>
    </div>
  )
}

export default NavBar