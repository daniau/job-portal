
export default function PopularCategorySkeleton() {
  return (
    <div className="bg-[#F6F7FA] py-10 w-full">
      
      <div  className="px-8 w-[90%]  mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-2 ">
      {Array.from({ length: 10}).map((_, index) => (
          <div  key={index} className="flex flex-col items-center justify-center gap-y-2 gap-0 md:w-45 
          sm:w-30 lg:w-55 h-35 bg-[#FFFFFF] shadow-md rounded-lg p-4
           animate-pulse
         ">
            <div className="w-8 h-8 animate-pulse rounded-full bg-gray-200 "/>
            <div className="w-20 h-4 animate-pulse rounded-full bg-gray-200"/>
          </div>

        

        


       

        

          
        
))}  </div>

   
    </div>
  )
}
