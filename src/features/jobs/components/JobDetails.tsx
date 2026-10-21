import { getJobById } from "@/services/jobs.service";

interface JobDetailsProps {
  
  id?: string;
}

export default async function JobDetails({id}: JobDetailsProps) {
  try{
    const job = await getJobById(id as string);
   
    return (
      <div>
        <h1>{job.title}</h1>
        <p>{job.description}</p>
      </div>
    )
  } catch (error) {
    return (
      <div className="text-red-500">Error: {error instanceof Error ? error.message : 'An unknown error occurred'}</div>
    )
  }

}
