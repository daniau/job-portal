
// export default function JobDetailsPage() {
  
//   return (
//     <div>
//       <h1>job details page</h1>
//     </div>
//   );
// }
// import JobsList from "@/pages/jobs/JobsList";
// import SearchBar from "@/components/SearchBar";
import { getJobs } from "@/services/jobs.service";
import { Job } from "@/types/job";
import { Suspense } from "react";

// interface JobsPageProps {
//   searchParams: Promise<{ jobTitle?: string }>;
// }

export default async function JobsPage(props:{searchParams:Promise<{jobTitle?:string}>}) {
  const searchParams=props.searchParams
  const jobTitle=(await searchParams).jobTitle
//   const { jobTitle } = await searchParams;
//  const job=await getJobs(jobTitle)
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <SearchBar /> */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* <JobsList jobTitle={jobTitle} /> */}
        <h1>Jobs Page</h1> 
        <p>{jobTitle}</p>
      </Suspense>
    </div>
  );
}