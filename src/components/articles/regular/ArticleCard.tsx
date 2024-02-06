'use client'
import React from 'react'
import { Article } from '../container/ArticleList'
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image'
import Link from 'next/link';

type ArticleCardProps = {
  article : Article
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {    

  return (
    <Link href={`/articles/${article.id}`} className='flex-1 flex flex-col bg-darkHeader lg:min-w-[438px] max-w-[518px] h-[494px] rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all'>
      <div className='w-full  bg-cloudGray h-1/2 rounded-lg'>
        <Image src={article.image} width={200} height={200} alt={article.title} className='overflow-hidden object-cover w-full h-full rounded-tr-lg rounded-tl-lg'/>
      </div>
      <div className="flex flex-col  gap-6 p-5 pb-10 pt-6">
        <div className="flex gap-3">
        {
          article.tags.map((tag, index) => <Chip key={index} label={tag}  className='text-primary w-fit flex items-center justify-center py-2 rounded-md  text-xs border-solid border-2 border-primary'/>)
        }
        </div>
        <h1 className='lg:text-xl font-medium'>{article.title}</h1>
        <div className="flex items-center gap-5 mt-4">
          <Avatar alt="Remy Sharp" src="" />
          <h5 className='text-lg font-bold'>{article.author}</h5>
          <h6 className='text-xs'>August 20,2024</h6>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard