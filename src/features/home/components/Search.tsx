import Button from "@/shared/Button";
import Form from "next/form";

export default function Search() {
 
  return (
    <Form action="/jobs" className="flex items-center w-full">
      <input aria-label="Search by job title" type="search" name="title" id="title" placeholder="Search by job title....."
        className="w-full bg-white  rounded-l-md rounded-r-none  py-1.5  px-5 focus:outline-none  focus:none" />
      <Button title={"Search"} className="rounded-r-md rounded-l-none px-2 md:px-4 py-1.5 md:py-1" type="submit" />
     

    </Form> 
  )

}
