import Sidebar from '@/components/common/ui/Sidebar';
import NewPost from '@/components/posts/container/NewPost';
import PostsList from '@/components/posts/container/PostsList';
import React from 'react'

async function getPosts() {
  const res = await fetch('http://127.0.0.1:8080/posts.json', { cache : 'no-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch Posts')
  }

  return res.json()
}

const PostsPage = async () => {

  const posts = await getPosts();

  return (
    <div className="relative flex flex-col lg:flex-row gap-14">
      <Sidebar />
      <div className='w-full xl:w-1/2 flex flex-col gap-10'>
        <NewPost />
        <PostsList posts={posts}/>
      </div>
      <div className="hidden xl:flex w-1/4"></div>
    </div>
  )
}

export default PostsPage