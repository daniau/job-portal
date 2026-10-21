
import JobsList from "@/features/jobs/components/JobsList";
import { Suspense } from "react";
import JobListSkeleton from "@/components/skeleton/JobListSkeleton"
export default async function JobsPage(props:{searchParams?:Promise<{title?:string}>}) {
  const searchParams= await props.searchParams
  const title=searchParams?.title||''

  return (
    <div >
      <Suspense key={title} fallback={<JobListSkeleton/>}>
      
        <JobsList title={title} />
        
      </Suspense>
    </div>
  );
}