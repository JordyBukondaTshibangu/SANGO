import React from 'react'
import { useRouter } from 'next/navigation'
import Article, { ArticleT } from '@/components/articles/container/Article';

async function getContent() {
  const res = await fetch('http://127.0.0.1:8080/article-content.json', { cache : 'no-cache'});

  if (!res.ok) {
    throw new Error('Failed to fetch Content')
  }

  return res.json()
}

async function getSingleArticle(articleId:number) {
  const res = await fetch('http://127.0.0.1:8080/articles.json', { cache: 'force-cache' });
  const data = await res.json();

  const article = data.filter((item: ArticleT) => item.id === articleId);

  if (!res.ok) {
    throw new Error('Failed to fetch Content')
  }

  return article
}

const ArticleDetailPage = async () => {

  const router = useRouter();

  console.log(router)
  // const article =  getSingleArticle()
  const content = await getContent();


  const article =   {
    "id" : 4564564454,
    "title": "The Impact of Technology on the Workplace: How Technology is Changing",
    "author": "John Doe",
    "email": "john.doe@example.com",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "image1.jpg",
    "category": "Programming",
    "tags": ["JavaScript", "Programming"]
  }


  return (
    <Article article={article} content={content}/>
  )
}

export default ArticleDetailPage