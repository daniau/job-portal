export const getCategories = async () => {
  const response = await fetch(`${process.env.API_URL}/categories`);
  if (!response.ok) {
    throw new Error(`Failed to fetch categories:${response.statusText}`);
  }
  return response.json();
}

