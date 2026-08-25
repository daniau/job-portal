import JobsList from "@/pages/jobs/JobsList";
import { Suspense } from "react";

interface JobsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">All Jobs</h1>
      <Suspense key={currentPage} fallback={<div>Loading...</div>}>
        <JobsList page={currentPage} />
      </Suspense>
    </section>
  );
}
