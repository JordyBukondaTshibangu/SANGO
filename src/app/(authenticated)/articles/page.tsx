import React from 'react'
import ArticleHero from '@/components/articles/container/ArticleHero'
import ArticleList from '@/components/articles/container/ArticleList'

async function getArtciles() {
  const res = await fetch('http://127.0.0.1:8080/article.json');

  if (!res.ok) {
    throw new Error('Failed to fetch Articles')
  }

  return res.json()
}


const ArticlesPage = async () => {

  const articles = await getArtciles();

  return (
    <div className='flex flex-col gap-10'>
      <ArticleHero />
      <ArticleList articles={articles.articles} />
    </div>
  )
}

export default ArticlesPage