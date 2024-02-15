
import React from 'react'
import Notification from '../regular/Notification'

export type NotificationT =     {
      id: number,
      message: string,
      time: string,
      read: boolean
}
    
type NotificationsListProps = {
    notifications : NotificationT[]
}

const NotificationsList:React.FC<NotificationsListProps> = ({ notifications }) => {
  return (
      <div className='w-full flex-1 flex flex-col gap-4'>
          {
              notifications.map((notification:NotificationT, index:number)=> <Notification key={index} notification={notification} />)
          }
      </div>
  )
}

export default NotificationsList