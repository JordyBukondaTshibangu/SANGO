"use client";
import React, { useEffect, useState } from "react";
import ArticleCard from "../regular/ArticleCard";
import ArticleFilter from "../regular/ArticleFilter";
import Link from "next/link";

export type Article = {
  id: number;
  title: string;
  author: string;
  email: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
};
type ArticleListProps = {
  articles: Article[];
};
const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [articleList, setArticleList] = useState<Article[]>(articles);
  const [authors, setAuthors] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    let listAuthors: string[] = [];
    articles.forEach((article) => {
      listAuthors.push(article.author);
    });
    let authorsSet: Set<string> = new Set(listAuthors);
    setAuthors([...authorsSet]);

    let listCategories: string[] = [];
    articles.forEach((article) => {
      listCategories.push(article.category);
    });
    let categorySet: Set<string> = new Set(listCategories);
    setCategories([...categorySet]);
  }, [articles, setAuthors, setCategories]);

  const searchArticle = (search: string) => {
    let updatedArticles = articleList.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase()),
    );
    setArticleList(updatedArticles);
  };

  const searchAuthor = (author: string) => {
    let updatedArticles = articleList.filter(
      (article) => article.author.toLowerCase() === author.toLowerCase(),
    );
    setArticleList(updatedArticles);
  };

  const searchCategory = (category: string) => {
    let updatedArticles = articleList.filter(
      (article) => article.category.toLowerCase() === category.toLowerCase(),
    );
    setArticleList(updatedArticles);
  };

  const handleClearFilter = () => {
    setArticleList(articles);
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-between items-center gap-5">
        <h4 className="text-xl font-bold">Latest Articles</h4>
        <Link
          href="/articles/create-article"
          className="ml-auto flex items-center justify-center px-5 py-2 bg-primary rounded-xl text-white cursor-pointer"
        >
          Write an Article
        </Link>
        <span
          className="flex items-center justify-center px-5 py-2 bg-darkHeader rounded-xl text-white cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          {!showFilter ? "Show" : "Hide"} Filter
        </span>
      </div>
      {showFilter && (
        <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
          <ArticleFilter
            authors={authors}
            categories={categories}
            searchArticle={searchArticle}
            searchAuthor={searchAuthor}
            searchCategory={searchCategory}
          />
          <span
            className="min-w-max w-fit flex items-center justify-center px-6 py-2 lg:py-4 bg-darkHeader rounded-xl text-white cursor-pointer h-full -order-1 lg:order-1"
            onClick={handleClearFilter}
          >
            Clear Filter
          </span>
        </div>
      )}
      <div className="flex flex-wrap gap-10">
        {articleList.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
