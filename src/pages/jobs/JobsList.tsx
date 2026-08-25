
export default function JobsList() {
  return (
    <div>JobsList</div>
  )
}

// import { getJobs } from "@/services/jobs.service";
// import { Job } from "@/types/job";
// import FeaturedJobCard from "@/pages/home/components/FeaturedJobCard";
// import Pagination from "@/shared/Pagination";

// interface JobsListProps {
//   page: number;
// }

// export default async function JobsList({ page }: JobsListProps) {
//   const { data: jobs, totalPages } = await getJobs(page, 10);

//   if (!jobs.length) {
//     return <p className="text-center text-gray-500 py-8">No jobs found.</p>;
//   }

//   return (
//     <>
//       <FeaturedJobCard jobs={jobs} />
//       <Pagination currentPage={page} totalPages={totalPages} />
//     </>
//   );
// }
