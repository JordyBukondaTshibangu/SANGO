export interface IEvent {
    id: number;
    name: string;
    venue: string;
    date: string;
    location: string;
    description: string;
    email: string;
    organizer: string;
    phone: string;
    category: string;
    image: string;
    tags: string[];
    guests: number;
    gallery: string[];
  };