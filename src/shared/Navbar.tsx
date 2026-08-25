import Link from 'next/link'
import Button from './Button'

export default function Navbar() {
  return (
    <header className='bg-[#FFFFFF] shadow-md sticky top-0 left-0 right-0 z-50'>
      <nav className='py-2 md:py-4 px-4 md:px-8 text-[#338573]'>
        <ul className='flex justify-between items-center'>
          <li className='text-xl md:text-2xl font-bold'>
            <Link href="/">JobsPortal</Link>
            </li>
            <ul className='flex sm:text-sm md:text-base md:gap-4 gap-1 items-center'>
              <li className='hidden sm:block font-semibold'><Link href="/">Dashboard</Link></li>
              <li><Link href="/jobs/post"><Button title={"Post a Job"}/></Link></li>
            </ul>
          
        </ul>
       
      </nav>
    </header>
  )
}
