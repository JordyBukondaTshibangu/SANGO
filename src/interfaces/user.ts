export interface IUserExperience {
    jobPosition: string;
    description: string;
    company: string;
    year: number;
  };
  
  export interface IUserSkill {
    skill: string;
    proficiency: number;
  };
  export interface IUserAddress {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  
  export interface IUser {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthdate: string;
    gender: string;
    address: IUserAddress;
    phoneNumber: string;
    position: string;
    company: string;
    profile: string;
    bio: string;
    experience: IUserExperience[];
    socialLinks: {
      github: string;
      linkedin: string;
      twitter: string;
    };
    skills: IUserSkill[];
    createdAt: string;
  };