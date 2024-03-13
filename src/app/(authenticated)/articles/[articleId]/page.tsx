import React, { Suspense } from "react";
import Article, { ArticleT } from "@/components/articles/container/Article";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import LoadingArticle from "./loading";

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:8080/articles.json");
  const articles: ArticleT[] = await res.json();
  return articles.map((article: ArticleT) => ({ id: article.id }));
}

async function getContent() {
  const res = await fetch("http://127.0.0.1:8080/article-content.json", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Content");
  }

  return res.json();
}

async function getSingleArticle(articleId: number) {
  const res = await fetch("http://127.0.0.1:8080/articles.json", {
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();

  const article = data.filter(
    (item: ArticleT) => item.id === Number(articleId),
  )[0];
  if (!res.ok) {
    throw new Error("Failed to fetch Content");
  }

  return article;
}

interface ArticleDetailProps {
  searchParams: string;
  params: string;
}

const ArticleDetailPage: NextPage<ArticleDetailProps> = async (props: any) => {
  const { articleId } = props.params;

  const article = await getSingleArticle(articleId);
  const content = await getContent();

  if (!article) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingArticle />}>
      <Article article={article} content={content} />
    </Suspense>
  );
};

export default ArticleDetailPage;
