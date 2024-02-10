'use client'
import React, { useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import { CommentT, PostT } from '../container/PostsList';
import NewPostComment from './NewPostComment';
import PostComments from './PostComments';

type PostReactionPanelProps = {
    likes: number,
    comments: CommentT[],
    post : PostT
}

const PostReactionPanel: React.FC<PostReactionPanelProps> = ({ likes, comments, post }) => {
    
    const [ openCommentPannel, setOpenCommentPanel ] = useState<boolean>(false)
  return (
      <div className="flex flex-col gap-5">
        <div className='flex items-center gap-2 xl:gap-20'>
            <div className="flex-1 rounded-xl flex items-center justify-center gap-2 xl:gap-4 cursor-pointer px-2 xl:px-5 py-2 bg-dark xl:bg-inherit xl:hover:bg-dark">
                <span className='text-sm xl:text-xl min-w-max'>{ likes } Likes </span>
                <ThumbUpOffAltIcon className='text-sm xl:text-2xl leading-none' />
            </div>
            <div className="flex-1 rounded-xl flex items-center justify-center gap-2 xl:gap-4 cursor-pointer px-2 xl:px-5 py-2 bg-dark xl:bg-inherit xl:hover:bg-dark" onClick={() => setOpenCommentPanel(!openCommentPannel)}>
                <span className='text-sm xl:text-xl min-w-max'>{ comments.length } Comments </span>
                <CommentIcon className='text-sm xl:text-2xl leading-none' />
            </div>
            <div className="flex-1 rounded-xl flex items-end justify-center gap-2 xl:gap-4 cursor-pointer px-2 xl:px-5 py-2 bg-dark xl:bg-inherit xl:hover:bg-dark">
                <span className='text-sm xl:text-xl'>Share</span>
                <SendIcon className='text-lg xl:text-xl -rotate-45 leading-none' />
            </div>
          </div>
          {
            openCommentPannel &&  <div className="border-t border-solid py-10 flex flex-col gap-2">
                <NewPostComment post={post} />
                <PostComments comments={comments} />
            </div>
          }
      </div>
  )
}

export default PostReactionPanel