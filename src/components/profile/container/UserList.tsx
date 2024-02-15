import React from 'react'
import { UserT } from './Profile';
import GroupsIcon from '@mui/icons-material/Groups';
import UserPreview from '@/components/messages/regular/UserPreview';
import Link from 'next/link';

type UserListProps = {
    users : UserT[]
}
const UserList:React.FC<UserListProps> = ({users}) => {
  return (
    <div className='lg:w-1/3 bg-darkHeader rounded-lg px-5 py-10 flex flex-col gap-14'>
        <div className="w-full flex gap-4 items-center">
            <GroupsIcon className='text-3xl'/>
            <h4 className="text-2xl font-bold">My Network</h4>
        </div>
        <div className="flex lg:flex-col gap-2 h-fit overflow-y-auto">
        {
            users.map(({ firstName, lastName, profile, position, id }: UserT, index: number) => <Link href={`/users/${id}`} key={index} className='min-w-[300px]'>
                <UserPreview  name={firstName + ' ' + lastName} profile={profile} position={position} />
            </Link>)
        }
        </div>
    </div>
  )
}

export default UserList