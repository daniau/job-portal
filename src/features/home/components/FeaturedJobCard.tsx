import Button from "@/shared/Button";
import { Job } from "@/types/job";
import { Briefcase, DollarSign, MapPin } from "lucide-react";
import Link from "next/link";
interface FeaturedJobCardProps {
  jobs: Job[];
}
export default  function FeaturedJobCard({ jobs }: FeaturedJobCardProps) {
    return (
    <section className=" px-4 py-8 container mx-auto">
      <div className="flex flex-col gap-4  ">
        {jobs.map((job: Job, index: number) => (
          <div key={`${job.id}-${index}`} className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer
          border border-[#EFEFF0] flex items-center justify-between flex-wrap">
            <div>
            <div className="flex items-center gap-2">
            <div className="bg-[#338573] text-[#FFFFFF] p-2 rounded-full w-12 h-12 flex items-center justify-center font-bold text-3xl">J</div>
            <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="text-lg font-bold">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.company}</p>
            </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4 mt-2">
            <div className="flex items-center md:gap-1 gap-0.5">
              <MapPin className="md:w-4 w-3 md:h-4 h-3 text-[#338573]" />
              <span className="text-xs md:text-sm text-gray-500">{job.location}</span>
            </div>
            <div className="flex items-center md:gap-1 gap-0.5">
              <Briefcase className="md:w-4 w-3 md:h-4 h-3 text-[#338573]" />
              <span className="text-xs md:text-sm text-gray-500">{job.type}</span>
            </div>
            <div className="flex items-center md:gap-1 gap-0.5">
              <DollarSign className="md:w-4 w-3 md:h-4 h-3 text-[#338573]" />
              <span className="text-xs md:text-sm text-gray-500">{job.salary}</span>
            </div>
            </div>
            </div>
            <Link href={`/jobs/${job.id}`}>
              <Button title="View Details" className="mt-4 md:mt-0 "/>
            </Link>
            
          </div>
        ))}
      </div>
    </section>
  );
}