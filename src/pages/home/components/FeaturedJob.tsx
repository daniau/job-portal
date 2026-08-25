import { getJobs } from "@/services/jobs.service";
import FeaturedJobCard from "./FeaturedJobCard";
import { Suspense } from "react";
import FeaturedJobSkeleton from "@/components/skeleton/FeaturedJobSkeleton";
async function FeaturedJobsList() {
  try {
  const jobs = await getJobs();
    return (
      <FeaturedJobCard jobs={jobs} />
    );
  } catch (error) {
    return <div className="text-red-500 text-center text-lg font-bold">Something went wrong</div>;
  }
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
