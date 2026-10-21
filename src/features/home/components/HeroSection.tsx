'use client'
import Image from "next/image";
import { motion } from "motion/react";
import Search from "./Search";
// import { usePathname, useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
export default function HeroSection() {
  // const searchParams = useSearchParams()
  // const pathname = usePathname()
  // const {replace} = useRouter()

  // function handleSearch(term: string) {
  //   const params = new URLSearchParams(searchParams)
  //   if (term) {
  //     params.set("title", term)
  //   } else {
  //     params.delete("title")
  //   }
  //   replace(`${pathname}?${params.toString()}`)
  // }
  return (
    <section className="bg-[#EFF6F2] min-h-[50vh] md:h-screen w-full relative overflow-hidden">
      <Image
        // loading="eager"
        src="/ImageBanner.webp"
        alt="hero-image"
        fill
        priority
        // fetchPriority="high"

        sizes="100vw"
        className="object-cover object-right"
      />

      <div className=" relative  flex  px-4 md:px-8  w-full h-full  ">

        <div
          className="z-10 w-full lg:w-1/2 flex flex-col items-start md:justify-center mt-10 md:mt-0 md:mb-25 mb-0 ">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold lg:leading-18 text-gray-900 ">
            Find A <span className="text-[#338573]">Job</span>  That <span className="text-[#338573]">Matches</span>  Your Passion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[#616161] text-sm md:text-base font-extralight mt-4">Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.</motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center  mt-4 w-full">
             <Search />
            {/* <input type="search" name="search" id="search" placeholder="Search by job title....."
              onChange={(e) => handleSearch(e.target.value)}
              defaultValue={searchParams?.get("title")?.toString()}
              className="w-full bg-white  rounded-l-md rounded-r-none  py-1.5  px-5 focus:outline-none  focus:none" />
          <Link href={`/jobs?title=${searchParams?.get("title")?.toString() ?? ""}`}>
          <Button title={"Search"} className="rounded-r-md rounded-l-none px-2 md:px-4 py-1.5 md:py-1" />
          </Link> */}
          </motion.div>
        </div>



      </div>


    </section>

  )
}