
export default function FeaturedJobSkeleton() {
  return (
    <section className=" px-4 py-8 container mx-auto">
      {Array.from({ length: 4 }).map((_, index) => (
    
      <div  key={index} className="flex flex-col gap-4">
        
          <div  className="bg-white p-4 rounded-lg shadow-md animate-pulse 
          border border-[#EFEFF0] mb-4">
            <div>
            <div className="flex items-center gap-2">
            <div className="w-12 h-12 animate-pulse rounded-full bg-gray-200"/>
            <div className="flex flex-col justify-center items-start gap-1">
            <div className="w-20 h-4 animate-pulse rounded-full bg-gray-200"/>
            <div className="w-10 h-3 animate-pulse rounded-full bg-gray-200"/>
            </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4 mt-2">
            <div className="flex items-center md:gap-1 gap-0.5">
            <div className="md:w-4 w-3 md:h-4 h animate-pulse" />
            <div className="w-10 h-3 animate-pulse rounded-full bg-gray-200"/>
            </div>
            <div className="flex items-center md:gap-1 gap-0.5">
              <div className="md:w-4 w-3 md:h-4 h animate-pulse" />
              <div className="w-10 h-3 animate-pulse rounded-full bg-gray-200"/>
            </div>
            <div className="flex items-center md:gap-1 gap-0.5">
              <div className="md:w-4 w-3 md:h-4 h-3 animate-pulse" />
              <div className="w-10 h-3 animate-pulse rounded-full bg-gray-200"/>
            </div>
            </div>
            </div>
            
            
          </div>
      
      </div>
    
      ))}
    </section>
  )
}
