import React from 'react'
import PostCard from '../regular/PostCard'

export type AuthorT = {
    name: string,
    position: string,
    email: string,
    profile : string,
}
export type CommentT = {
    author: AuthorT,
    email: string,
    text: string,
    createdAt: string,
    authorId: number,
    profile: string,
    replies : CommentT[]
    likes : number
}
export type PostT = {
    id : number,
    title: string,
    content: string,
    publishedAt : string,
    author: string,
    tags:  string[],
    image: string,
    comments: CommentT[],
    likes: number
}
type PostsListProps = {
    posts : PostT[]
}
const PostsList:React.FC<PostsListProps> = ({posts}) => {
    return (
        <div className='flex flex-col gap-5'>
            {  posts.map((post:PostT) => <PostCard key={post.id} post={post} />) }
        </div>
  )
}

export default PostsList