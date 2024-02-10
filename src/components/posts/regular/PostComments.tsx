'use client'
import React, { useState } from 'react'
import { CommentT } from '../container/PostsList';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Image from 'next/image';
import PublicIcon from '@mui/icons-material/Public';

type PostCommentsProps = {
    comments : CommentT[]
}
const PostComments:React.FC<PostCommentsProps> = ({comments}) => {


    const [relevance, setRelevance] = useState<string>('recent');
    const [showReplies, setShowReplies] = useState<boolean>(false);
    const [ listComments, setListComments ] = useState<CommentT[]>(comments)
    
      
    const handleChange = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value;
        setRelevance(selectedValue);

        if (selectedValue === 'recent') {
            const recentList = [...listComments].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            setListComments(recentList);
        } else if (selectedValue === 'relevant') {
            const relevantList = [...listComments].sort((a, b) => b.likes - a.likes);
            setListComments(relevantList);
        }
    };

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            timeZone: 'UTC' 
        };
        return date.toLocaleString('en-US', options);
    }

    return (
        <div className='flex flex-col gap-5 mt-5'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" className='text-grayFirst'>Relevance</InputLabel>
                <Select
                    value={relevance}
                    onChange={handleChange}
                    label="Relevance"
                    className='w-48 text-grayFirst'
                >
                    <MenuItem value='recent'>Most Recent</MenuItem>
                    <MenuItem value='relevant'>Most Relevant</MenuItem>
                </Select>
            </FormControl>
            <div className="flex flex-col gap-4">
                {
                    listComments.length > 0 && listComments.map((comment, index) => <div key={index} className='flex flex-col gap-2'>
                        <div className='flex gap-4 lg:p-5'>
                            <div className="flex justify-center items-center rounded-full w-14 h-12">
                                <Image src={comment.profile} width={200} height={200} alt='' className='w-full h-full rounded-full object-cover' />
                            </div>
                            <div className="bg-dark w-full rounded-md p-4 flex flex-col gap-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-xs lg:text-sm font-bold">{comment.author.name} Steve Matthew</h4>
                                        <p className='text-xs lg:text-[14px]'>{comment.author.position}C.E.O at Fireworkx</p>
                                    </div>
                                    <p className='flex items-center gap-1 lg:gap-2'>
                                        <span className='text-[10px] lg:text-xs'>{formatDate(comment.createdAt)}</span>
                                        <PublicIcon className='hidden lg:flex text-xs lg:text-sm' />
                                    </p>
                                </div>
                                <p className='text-sm lg:text-[16px] leading-7'>{comment.text}</p>
                            </div>
                        </div>
                        <div className="px-20 lg:px-24 flex gap-2">
                            <span className='text-xs lg:text-sm'>{ comment.likes} Likes</span> 
                            <span className='text-xs lg:text-sm'>|</span> 
                            <span className='text-xs lg:text-sm hover:underline cursor-pointer' onClick={() => setShowReplies(!showReplies)}>{ comment.replies.length} Replies</span> 
                        </div>
                        <div className="ml-5 lg:ml-20 flex flex-col gap-4">
                            {
                                showReplies && comment.replies.map((comment, index) => <div key={index} className='flex gap-4 p-5'>
                                <div className="flex justify-center items-center rounded-full w-8 lg:w-14 h-6 lg:h-12">
                                    <Image src={comment.profile} width={200} height={200} alt='' className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-dark w-full rounded-md p-4 flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-xs lg:text-sm font-bold">{comment.author.name} Steve Matthew</h4>
                                        <p className='text-xs lg:text-[14px]'>{comment.author.position}C.E.O at Fireworkx</p>
                                    </div>
                                    <p className='flex items-center gap-1 lg:gap-2'>
                                        <span className='text-[8px] lg:text-xs'>{formatDate(comment.createdAt)}</span>
                                        <PublicIcon className='text-xs lg:text-sm' />
                                    </p>
                                    </div>
                                    <p className='text-sm lg:text-[16px] leading-7'>{comment.text}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default PostComments