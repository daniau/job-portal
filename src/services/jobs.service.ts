
// import { URLSearchParams } from 'next/navigation';
import { Job } from "@/types/job"
export function apiURL(path:string){
  const base=process.env.API_URL
  if(!base) throw new Error("API_URL is not set")
    return new URL(path, base);

}
export const getJobs = async (title?:string):Promise<Job[]> => {
  const url=apiURL(`/jobs`)
  const q=title?.trim()
  if(q){
   url.searchParams.set('title',q)
  }

 const response = await fetch(url);
 if(response.status===404&&q) return []
  if (!response.ok) {
    throw new Error(`Failed to fetch job:${response.statusText}`);
  }
  return response.json();
 
}

export const getJobById = async (id: string) => {
  const url=apiURL("/jobs")
  const response=await fetch(`${url}/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch job:${response.statusText}`);
  }
  return response.json();
}