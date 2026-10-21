const ROWS = 8;
// عروض مختلفة عشان الشكل يكون طبيعي أكتر من أعمدة متطابقة
const TITLE_WIDTHS = ["w-32", "w-40", "w-28", "w-36"];
export default function JobListSkeleton() {
  return (
    <div className="bg-[#FFFFFF] pb-10 w-full min-h-screen">
      <div className=" mb-3.5 pt-10 pb-5 bg-[#fffcfc] p-4 rounded-lg shadow-md animate-pulse " >

      <div className=" mx-auto py-3 w-[20%] h-4 bg-[#F4F5F7] rounded-full  animate-pulse "/> 
      </div>
      <div
      aria-busy="true"
      className="bg-white w-[90%] mx-auto shadow border border-[#CCCCCC] rounded-sm"
    >
      <div className="overflow-x-auto overscroll-x-contain">
        <table className="w-full min-w-180 text-[15px] font-normal leading-14">
          <caption className="sr-only">Loading jobs…</caption>
          <thead className="border-b border-b-[#353030] text-[18px] font-semibold">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Job Type</th>
              <th scope="col">Salary</th>
              <th scope="col">Location</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {/* animate-pulse على الـ tbody مرة وحدة بدل كل عنصر */}
          <tbody className="text-center divide-y divide-gray-200 animate-pulse motion-reduce:animate-none py-5">
            {Array.from({ length: ROWS }).map((_, i) => (
              <tr key={i} className="border-b border-b-[#fffcfc] h-10 ">
                <td>
                  <div className={`mx-auto h-4 rounded-full bg-gray-200 ${TITLE_WIDTHS[i % TITLE_WIDTHS.length]}`} />
                </td>
                <td><div className="mx-auto h-4 w-20 rounded-full bg-gray-200" /></td>
                <td><div className="mx-auto h-4 w-16 rounded-full bg-gray-200" /></td>
                <td><div className="mx-auto h-4 w-24 rounded-full bg-gray-200" /></td>
                <td>
                  <div className="flex justify-center items-center gap-1">
                    <div className="h-5 w-5 rounded-full bg-gray-200" />
                    <div className="h-5 w-5 rounded-full bg-gray-200" />
                    <div className="h-5 w-5 rounded-full bg-gray-200" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>




  
  )
}
