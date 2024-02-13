import React from 'react';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

type InfoPanelProps = {
    bio: string,
    email: string,
    phoneNumber: string,
    address: {
        street: string,
        city: string,
        state: string,
        zipCode: string,
        country : string
    }
}

const InfoPanel: React.FC<InfoPanelProps> = ({ bio, email, phoneNumber, address }) => {
    
    const userAddress =  `${address.street} ${address.city} ${address.state} ${address.country}`
    return (
        <div className='flex flex-col gap-4 mt-5'>
            <div className='bg-dark p-5 rounded-lg flex flex-col gap-4'>
                <h4 className="text-[16px] font-medium border-b border-primary border-solid w-fit">About Me</h4>
                <p className="text-sm leading-7">{ bio }</p>
            </div>
            <div className='bg-dark p-5 rounded-lg flex flex-col gap-4'>
                <h4 className="text-[16px] font-medium border-b border-primary border-solid w-fit">Contact Me</h4>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <LocalPhoneIcon className='text-lg' />
                        <span className='text-[16px]'>{phoneNumber}</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <EmailIcon className='text-lg' />
                        <span className='text-[16px]'>{email}</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <RoomOutlinedIcon className='text-lg' />
                        <p>{ userAddress }</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default InfoPanel