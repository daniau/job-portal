import { getCategories } from "@/services/categories.service";
import PopularCategoriesCard from "./PopularCategoryCard";
import PopularCategorySkeleton from "@/components/skeleton/PopularCategorySkeleton";
import { Suspense } from "react";
async function CategoryData() {
  try {
    const categories = await getCategories();
    return (
      <PopularCategoriesCard  categories={categories} />
    )
  } catch (error) {
    // console.error(error); 
    return <div className="text-red-500 text-center text-lg font-bold">Something went wrong</div>;
  }
}

export default  function PopularCategories() {
  return (
    <section className="bg-[#F6F7FA] py-10 w-full">
      <h2 className="text-xl font-bold text-center pt-10 pb-5 ">Popular Categories</h2>
      <Suspense fallback={<PopularCategorySkeleton />}>
     <CategoryData />
     </Suspense>

    </section>
  )
}
