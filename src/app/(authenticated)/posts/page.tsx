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
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:flex lg:w-1/4">Test</div>
      <div className='w-full lg:w-1/2 flex flex-col gap-10'>
        <NewPost />
        <PostsList posts={posts}/>
      </div>
      <div className="w-1/4">Test</div>
    </div>
  )
}

export default PostsPage