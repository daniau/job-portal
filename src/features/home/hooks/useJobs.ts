'use client'
import { getJobs } from '@/services/jobs.service'
import { useEffect, useState } from 'react'


export default  function useJobs(title?:string) {
  const [jobState, setJobState] = useState<{ isLoading: boolean, error: any | null }>({ isLoading: true, error: null })
  const[jobs,setJobs]=useState<[]>([])

  useEffect(()=>{
    async function loadJobs() {

      try {
        setJobState({isLoading:true,error:null})

        const jobs=await getJobs(title)
        // const filterdJobs=selectedCategoryId?jobs.filter(jobs.categoryId===selectedCategoryId):jobs
          setJobs(jobs)

        
       
        
      } catch (error:any) {
        setJobState((prev)=>({...prev,error:error}))

        }
      finally{
          setJobState((prev)=>({...prev,isLoading:false}))
      }
     
      
    }
    loadJobs()
  

  },[title])
  return{jobs,jobState}


}

