export interface Category {
  id: string;
  name: string;

}
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: number;
  description: string;
  requirements: string[];
  isFeatured: boolean;
  categoryId: number;
  companyName: string;
  companyWebsite: string;
  jobTitle: string;
  jobCategory: string;
  jobType: string;
  jobLocation: string;
  experience: string;
  salaryRange: string;
  featured: string;
  jobDescription: string;
  
}