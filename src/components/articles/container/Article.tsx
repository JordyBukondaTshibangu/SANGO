import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import ArticleSecImg from "../../../../public/assets/globe.jpg";
import Image from "next/image";

export type ArticleT = {
  id: number;
  title: string;
  author: string;
  email: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
};

type ArticleProps = {
  article: ArticleT;
  content: any | null;
};

const Article: React.FC<ArticleProps> = ({ article, content }) => {
  const {
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6,
    paragraph7,
    conclusion,
  } = content.content;

  return (
    <div className="flex flex-col gap-10 lg:w-3/4 mx-auto">
      <div className="flex flex-col  gap-6">
        <div className="flex gap-3">
          {article.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              className="text-primary w-fit flex items-center justify-center py-2 rounded-md  text-xs border-solid border-2 border-primary"
            />
          ))}
        </div>
        <h1 className="lg:text-3xl leading-8 font-medium">{article.title}</h1>
        <div className="flex items-center gap-5 mt-4">
          <Avatar alt="Remy Sharp" src="" />
          <h5 className="text-lg font-bold">{article.author}</h5>
          <h6 className="text-xs">August 20,2024</h6>
        </div>
      </div>
      <div className="w-full bg-black h-[550px] rounded-lg">
        <Image
          src={article.image}
          width={300}
          height={300}
          alt={article.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-sm leading-7 lg:text-lg lg:leading-10">
          {paragraph1}
        </p>
        <h4 className="text-2xl font-medium">{heading1}</h4>
        <p className="text-sm leading-7 lg:text-lg lg:leading-10">
          {paragraph2}
        </p>
        <h4 className="text-2xl font-medium">{heading2}</h4>
        <p className="text-sm leading-7 lg:text-lg lg:leading-10">
          {paragraph3}
        </p>
        <h4 className="text-2xl font-medium">{heading3}</h4>
        <p className="text-sm leading-7 lg:text-lg lg:leading-10">
          {paragraph4}
        </p>
        <h4 className="text-2xl font-medium">{heading4}</h4>
        <p className="text-sm leading-7 lg:text-lg lg:leading-10">
          {paragraph5}
        </p>
        <div className="w-full bg-black h-[550px] rounded-lg my-10">
          <Image
            src={ArticleSecImg}
            alt={article.title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <h4 className="text-2xl font-medium">{heading5}</h4>
        <p className="text-sm leading-7 lg:text-lg lg:leading-10">
          {paragraph6}
        </p>
        <h4 className="text-2xl font-medium">{heading6}</h4>
        <p className="text-sm leading-7 lg:text-lg lg:leading-10">
          {paragraph7}
        </p>
        <h4 className="text-2xl font-medium">Conclusion</h4>
        <p className="text-sm leading-7 lg:text-lg lg:leading-10">
          {conclusion}
        </p>
      </div>
    </div>
  );
};

export default Article;
