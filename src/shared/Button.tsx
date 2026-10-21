import { ReactNode } from "react"

interface ButtonProps{
  title?:string
  className?:string
  type?:'button' | 'submit' | 'reset'
  children?:ReactNode
  unstyled?:boolean

}
export default function Button({title, className, type='button',children,unstyled=false}:ButtonProps) {

  return (
    <button 
   
     className={unstyled? "" :` bg-[#338573] text-[#ffffff] px-2 md:px-4 md:py-2 py-1.5 rounded-md
     hover:bg-[#266a5a] transition-colors
     duration-300 cursor-pointer  ${className} `} type={type}>{title}
     {children}
     
     </button>
  )
}
