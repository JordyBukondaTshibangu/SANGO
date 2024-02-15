import React from 'react';
import MessageChat from '@/components/messages/container/MessageChat'
import MessagesList from '@/components/messages/container/MessagesList'
import SenderDetails from '@/components/messages/container/SenderDetails'


async function fetchAllChats() {
  const res = await fetch('http://127.0.0.1:8080/messages.json', { cache : 'no-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch Messages')
  }

  return res.json()
}

const MessagePage = async () => {

  const {messages } = await fetchAllChats();
  return (
    <div className='relative w-full flex lg:-my-10 lg:-mx-10 gap-5'>
      <MessagesList chats={messages}/>
      <MessageChat />
      <SenderDetails />
    </div>
  )
}

export default MessagePage