import React from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

const MyNetwork = () => {
  return (
      <div className="lg:sticky top-32 w-full flex lg:w-1/4 bg-darkHeader rounded-lg flex-col gap-10 px-10 py-10 h-fit">
          <h4 className='text-xl font-bold'>__My Network__</h4>
          <ul className='flex flex-col gap-10'>
            <li className='flex items-start gap-5'>
                  <PeopleAltOutlinedIcon />
                  <span>My Connections</span>
                  <span className='font-medium'>243</span>
            </li>
            <li className='flex items-start gap-5'>
                  <Groups2OutlinedIcon />
                  <span>My Groups</span>
                  <span className='font-medium'>15</span>
            </li>
            <li className='flex items-start gap-5'>
                  <AutoStoriesOutlinedIcon />
                  <span>My Pages</span>
                  <span className='font-medium'>10</span>
            </li>
              
          </ul>
    </div>
  )
}

export default MyNetwork