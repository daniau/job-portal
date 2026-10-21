// import { URLSearchParams } from 'next/navigation';

export const getJobs = async (title?:string) => {
  const params=new URLSearchParams()
  if(title){
    params.set('title',title.trim())
  }
 const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch job:${response.statusText}`);
  }
  return response.json();
 
}

export const getJobById = async (id: string) => {
  const response = await fetch(`${process.env.API_URL}/jobs/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch job:${response.statusText}`);
  }
  return response.json();
}