import React from 'react';
import Image from 'next/image';

type UserPreviewProps = {
    profile: string,
    name: string,
    position : string
}

const UserPreview:React.FC<UserPreviewProps>= ({profile, name, position }) => {
  return (
        <div className="hidden lg:flex gap-5 items-center  border-b border-solid pb-5 lg:pb-10 border-darkHeader lg:border-dark">
            <div className="flex justify-center items-center rounded-full w-20 h-20">
                <Image src={profile} width={200} height={200} alt='' className='w-full h-full rounded-full object-cover' />
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">{name}</h4>
                <div className="flex flex-col">
                    <p>{position}</p>
                </div>
            </div>
        </div>
  )
}

export default UserPreview