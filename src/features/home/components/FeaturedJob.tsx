import { getJobs } from "@/services/jobs.service";
import FeaturedJobCard from "./FeaturedJobCard";
import { Suspense } from "react";
import FeaturedJobSkeleton from "@/components/skeleton/FeaturedJobSkeleton";
async function FeaturedJobsList() {
  
  const jobs = await getJobs();
    return (
      <FeaturedJobCard jobs={jobs} />
    );
 
}
export default function FeaturedJob() {
  
  return (
    <section className=" px-4 py-8 ">
      <h2 className="text-2xl font-bold text-center mb-8">Featured Jobs</h2>
      <Suspense fallback={<FeaturedJobSkeleton />}>
        <FeaturedJobsList />
      </Suspense>
      
    </section>
  )
}
