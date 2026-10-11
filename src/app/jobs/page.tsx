
import { getJobs } from "@/services/jobs.service";
import { Job } from "@/types/job";
import { Suspense } from "react";



export default async function JobsPage(props:{searchParams?:Promise<{jobTitle?:string}>}) {
  const searchParams= await props.searchParams
  const jobTitle=searchParams?.jobTitle||''

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Jobs Page</h1> 
        <p>{jobTitle}</p>
      </Suspense>
    </div>
  );
}