export const getJobs = async (jobTitle?: string) => {
  const response = await fetch(`${process.env.API_URL}/jobs`);
  if (!response.ok) {
    throw new Error(`Failed to fetch jobs:${response.statusText}`);
  }
  return response.json();
}
export const getJobById = async (id: string) => {
  const response = await fetch(`${process.env.API_URL}/jobs/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch job:${response.statusText}`);
  }
  return response.json();
}