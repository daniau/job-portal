import Button from "@/shared/Button"
import { Job } from "@/types/job"
import { Eye,Pencil,Trash2 } from "lucide-react"
import Link from "next/link"
export default function JobsTable({jobs}:{jobs: Job[]}) {
  return (
    <div className="bg-white  w-[90%] mx-auto shadow  border border-[#CCCCCC]  rounded-sm">
      <div role="region" aria-label="Job List" tabIndex={0}    
      className="overflow-x-auto overscroll-x-contain focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#338573]"
      >
      <table className="w-full min-w-180 text-[15px] font-normal leading-14 ">
        <caption className="sr-only">Job List </caption>
      <thead className=" border-b border-b-[#353030]  text-[18px] font-semibold    ">
        <tr className="">
          <th className=" sticky" scope="col">Title</th>
          <th scope="col">Job Type</th>
          <th scope="col">Salary</th>
          <th scope="col">Location</th>
          <th scope="col">Action</th>

        </tr>
      </thead>
      <tbody  className="text-center divide-y divide-gray-200 ">
        {jobs.map((job,index) => <tr key={job.id+index} className="border-b border-b-[#CCCCCC]  py-0.5 ">
          <td className=" sticky">{job.title}</td>
          <td >{job.type}</td>
          <td >{job.salary}</td>
          <td >{job.location}</td>
          <td ><div className="flex justify-center items-center gap-1">
            <Link href={`/jobs/${job.id}`}   >
              <Eye  size={20} className="text-[#338573] cursor-pointer"/>
            </Link>
            <Button unstyled={true}  >
              <Pencil size={20} className="text-[#04BCF6] cursor-pointer"/>
            </Button>
            <Link href={`/jobs/${job.id}`}  >
              <Trash2 size={20} className="text-[#FA0606] cursor-pointer    " />
            </Link>
          </div>
          </td>

        </tr>)}
      </tbody>

    </table>
    </div>
    </div>

  )
}
