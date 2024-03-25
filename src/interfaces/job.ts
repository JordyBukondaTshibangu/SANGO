export interface IJob {
    id: number;
    title: string;
    period: string;
    company: string;
    location: string;
    description: string;
    requirements: string[];
    salary: string;
    image: string;
    category: string;
    desirables: string[];
    benefits: string[];
  };