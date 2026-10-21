import { getJobById } from "@/services/jobs.service";

interface JobDetailsProps {
  
  id?: string;
}

export default async function JobDetails({id}: JobDetailsProps) {
    const job = await getJobById(id as string);
   
    return (
      <div>
        {job? <>
          <h1>{job.title}</h1>
          <p>{job.description}</p>
        </>:
        <p>not found</p>}
       
      </div>
    )
 
      // <div className="text-red-500">Error: {error instanceof Error ? error.message : 'An unknown error occurred'}</div>
    
  }


