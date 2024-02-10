
import React from 'react'
import Article, { ArticleT } from '@/components/articles/container/Article';
import { NextPage } from 'next';

async function getContent() {
  const res = await fetch('http://127.0.0.1:8080/article-content.json', { cache : 'no-cache'});

  if (!res.ok) {
    throw new Error('Failed to fetch Content')
  }

  return res.json()
}

async function getSingleArticle(articleId:number) {
  const res = await fetch('http://127.0.0.1:8080/articles.json', { cache: 'no-cache' });
  const data = await res.json();

  const article = data.articles.filter((item: ArticleT) => item.id === Number(articleId))[0];
  if (!res.ok) {
    throw new Error('Failed to fetch Content')
  }

  return article
}




interface ArticleDetailProps {
  searchParams : string,
  params : string
}


const ArticleDetailPage:NextPage<ArticleDetailProps> = async (props : any) => {
  
  const { articleId } = props.params;

  const article = await getSingleArticle(articleId);
  const content = await getContent();

  return (
    <Article article={article} content={content}/>
  )
}

export default ArticleDetailPage