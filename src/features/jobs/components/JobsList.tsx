"use client"
import useJobs from "../../home/hooks/useJobs"
import JobsTable from "./JobsTable"
interface JobsListProps {
  title?: string,
  selectedCategoryId?: number
}

export default function JobsList({ title }: JobsListProps) {
  const { jobs, jobState } = useJobs(title)
  if (jobState.isLoading) return <p>isLoading....</p>
  console.log(jobState.error)
console.log(jobs)
  if (jobState.error) {
    console.log(jobState.error)

    return <p>something error</p>
  }
  return (
    <main className="bg-[#FFFFFF] pb-10 w-full min-h-screen">
      <h1 className="text-xl font-bold text-center mb-3.5 pt-10 pb-5 bg-[#F4F5F7] ">{title}</h1>
      <JobsTable jobs={jobs}/>
    </main>
  )
}


