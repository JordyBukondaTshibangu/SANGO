import React from 'react'
import Image from 'next/image';
import PublicIcon from '@mui/icons-material/Public';
import UserProfile from '../../../../public/assets/profile.jpeg';
import { formatDate } from '@/utils/formatDate';

const user = {
    id: 2390239032,
    username: "jordy_tshibangu",
    firstName: "Jordy",
    lastName: "Tshibangu",
    email: "jordy@example.com",
    position : "Software Engineer | Entrepreneur",
    birthdate: "1990-05-15",
    gender: "Male",
    address: {
        street: "123 Main Street",
        city: "Cityville",
        state: "State",
        zipCode: "12345",
        country: "Country"
    },
    phoneNumber: "+1234567890",
    avatar: "https://example.com/avatar.jpg",
    bio: "Passionate software developer always eager to learn and explore new technologies.",
    socialLinks: [
        {
            name : 'github',
            link: "https://github.com/jordy_tshibangu",
        },
        {
            name : 'linkedin',
            link: "https://www.linkedin.com/in/jordy-tshibangu",
        },
        {
            name : 'twitter',
            link : "https://twitter.com/jordy_tshibangu"
        }
    ],
    createdAt: "2023-01-01T08:30:00Z"
};
const Sidebar = () => {
    
  return (
    <div className="w-full flex lg:w-1/4 bg-darkHeader rounded-lg flex-col gap-10 px-5 py-10 items-center h-fit">
        <div className="flex justify-center items-center rounded-full w-20 h-20">
            <Image src={UserProfile} width={200} height={200} alt='' className='w-full h-full rounded-full object-cover' />
        </div>
        <div className="flex flex-col gap-6 items-center border-t border-solid py-10 border-dark">
            <h4 className="text-xl font-bold text-center">{user.firstName} { user.lastName}</h4>
            <div className="flex flex-col items-center gap-4">
                <p className='text-center'>{user.position}</p>
                <p className='flex items-center gap-2'>
                    <span className='text-xs'>Join in {formatDate(user.createdAt)}</span>
                    <PublicIcon className='text-sm' />
                </p>
              </div>
              <div className="border-t border-solid border-dark w-full py-5 flex flex-col gap-2 items-center">
                  <p>Address</p>
                  <p className='text-sm'>{user.address.street} {user.address.city} {user.address.state} { user.address.country}</p>
             </div>
            <div className="border-t border-solid border-dark w-full py-5 flex flex-col gap-2 items-center">
                <p>Contact</p>
                <p className='text-sm'>{user.phoneNumber}</p>
            </div>
            <div className="border-t border-solid border-dark w-full py-5 flex flex-col gap-2 items-center">
                <p>Bio</p>
                <p className='text-[15px] text-center'>{user.bio}</p>
             </div>
            <div className="border-t border-solid border-dark w-full py-5 flex flex-col gap-2 items-center">
                <p>Social Links</p>
                <ul className='flex flex-col gap-2 list-disc'>
                      {user.socialLinks.map((link, index) => <li key={index} className='text-[15px] text-center hover:underline'>
                          <a href={`${link.link}`}>{link.name}</a>
                      </li>)}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar