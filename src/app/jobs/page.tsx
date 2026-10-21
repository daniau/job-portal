
import JobsList from "@/features/jobs/components/JobsList";
import { Suspense } from "react";
export default async function JobsPage(props:{searchParams?:Promise<{title?:string}>}) {
  const searchParams= await props.searchParams
  const title=searchParams?.title||''

  return (
    <div >
      <Suspense fallback={<div>Loading...</div>}>
        <JobsList title={title} />
        
        {/* <p>{JSON.stringify(await getJobs(title))}</p> */}
      </Suspense>
    </div>
  );
}