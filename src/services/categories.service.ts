import { apiURL } from "./jobs.service";

export const getCategories = async () => {
  const url=apiURL("/categories")
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch categories:${response.statusText}`);
  }
  return response.json();
}

