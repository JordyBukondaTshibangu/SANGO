'use client'
import React from 'react'
import { PostT } from '../container/PostsList';
import Myprofile from '../../../../public/assets/profile.jpeg'
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

// Logged in User
type NewPostCommentProps = {
    post : PostT
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const NewPostComment:React.FC<NewPostCommentProps> = ({post}) => {
  return (
      <div className="flex items-center gap-1 lg:gap-2">
        <div className="flex justify-center items-center rounded-full w-10 lg:w-14 h-8 lg:h-12">
            <Image src={Myprofile} width={200} height={200} alt='' className='w-full h-full rounded-full object-cover' />
          </div>
        <div className="w-full flex">
        <input type='text' placeholder='Add your comment' className='w-full px-2 border-t-0 border-r-0 border-l-0 border-b border-b-grayFirst border-solid bg-darkHeader outline-none  py-1 text-sm lg:text-[16px]' />
        <Button component="label"  className='p-0 lg:w-fit flex justify-center items-center' startIcon={<ImageOutlinedIcon className='text-sm lg:text-lg leading-none'/>}>
            <VisuallyHiddenInput type="file" />
            </Button>
        </div>  
        <IconButton aria-label="delete" size="large" className='p-0 lg:bg-dark text-danger'>
            <DeleteIcon className='text-lg'/>
        </IconButton>
    </div>
  )
}

export default NewPostComment