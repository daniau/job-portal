import { getJobs } from "@/services/jobs.service"
import JobsTable from "./JobsTable"
interface JobsListProps {
  title?: string,
  selectedCategoryId?: number
}


export default async function JobsList({ title }: JobsListProps) {
 const jobs=await getJobs(title)
 
  
  return (
    <main className="bg-[#FFFFFF] pb-10 w-full min-h-screen">
    <h1 className="text-xl font-bold text-center mb-3.5 pt-10 pb-5 bg-[#F4F5F7] "> {title? `${title.toUpperCase()} JOBS`:`ALL JOBS`}  </h1>
      {jobs.length!==0?  <JobsTable jobs={jobs}/>:<p>No Job Found {title?`for ${title}`:title}</p>}
      
      
    
    </main>
  )
}


