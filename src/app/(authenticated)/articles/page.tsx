import React from 'react'
import ArticleHero from '@/components/articles/container/ArticleHero'
import ArticleList from '@/components/articles/container/ArticleList'

const ArticlesPage = () => {
  return (
    <div className='flex flex-col gap-10'>
      <ArticleHero />
      <ArticleList />
    </div>
  )
}

export default ArticlesPage