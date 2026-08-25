export const getJobs = async () => {
  const response = await fetch(`${process.env.API_URL}/jobs?featured=Yes`);
  if (!response.ok) {
    throw new Error(`Failed to fetch jobs:${response.statusText}`);
  }
  return response.json();
}
