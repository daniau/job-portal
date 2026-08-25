interface ButtonProps{
  title:string
  className?:string
}
export default function Button({title, className}:ButtonProps) {

  return (
    <button className={`bg-[#338573] text-[#ffffff] px-2 md:px-4 md:py-2 py-1.5 rounded-md
     hover:bg-[#266a5a] transition-colors
     duration-300 cursor-pointer  ${className}`}>{title}</button>
  )
}
