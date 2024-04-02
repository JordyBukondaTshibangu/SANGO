export interface IAuthor {
    id: number;
    name: string;
    position: string;
    email: string;
    profile: string;
  };
  export interface IComment {
    author: IAuthor;
    email: string;
    text: string;
    createdAt: string;
    authorId: number;
    profile: string;
    replies: IComment[];
    likes: number;
  };
  export interface IPost {
    id: number;
    title: string;
    content: string;
    publishedAt: string;
    author: IAuthor;
    tags: string[];
    image: string;
    comments: IComment[];
    likes: number;
  };