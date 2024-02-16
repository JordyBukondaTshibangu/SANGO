import React from "react";
import ArticleCard from "../regular/ArticleCard";

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
  return (
    <div className="flex flex-col gap-10">
      <h4 className="text-xl font-bold">Latest Articles</h4>
      <div className="flex flex-wrap gap-10">
        {articles.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
