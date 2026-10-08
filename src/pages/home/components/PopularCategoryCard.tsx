"use client";

import {Box  } from "lucide-react";
import { motion } from "framer-motion";
import { Category } from "@/types/job";
interface PopularCategoriesCardProps {
  categories: Category[];
}

export default  function PopularCategoriesCard( {categories} : PopularCategoriesCardProps) {
  return (
      <div 
       className="px-8 w-[90%]  mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-6 ">
        {categories.map((category: Category, index: number) => (
          <motion.div key={category.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5,delay: index * 0.1 }} className="flex flex-col items-center justify-center
           gap-y-2 w-50 lg:w-60  h-35 bg-[#FFFFFF] shadow-md rounded-lg p-4 
          hover:scale-105 transition-all duration-500 cursor-pointer ">
            <div className="flex items-center justify-center bg-[#BDD8D2] rounded-full p-4">
            <Box className="w-8 h-8 hover:rotate-360 transition-all duration-300 cursor-pointer " color="#338573" />
            </div>
            <h3 className="text-[15px] md:text-base text-center font-medium ">{category.name}</h3>
          </motion.div>
        ))}
      </div>
    
  )
}
