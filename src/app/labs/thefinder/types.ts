export interface Job {
  id: number;

  title: string;

  company: string;

  location: string;

  type: string;

  category: string;

  salary: string;

  featured: boolean;

  posted: string;

  applicants: number;

  description: string;

  responsibilities: string[];

  requirements: string[];

  benefits: string[];
}