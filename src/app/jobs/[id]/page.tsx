import JobDetails from '@/features/jobs/components/JobDetails'
import React from 'react'


export default async function page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  return <JobDetails id={id} />;
}