import JobDetails from '@/features/jobs/components/JobDetails'


export default async function page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  return <JobDetails id={id} />;
}