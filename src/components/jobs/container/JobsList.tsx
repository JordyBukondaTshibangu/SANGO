import React from 'react'
import { JobT } from '../Jobs'
import JobCard from '../regular/JobCard'

type JobsListProps = {
  jobs : JobT[]
}
const JobsList:React.FC<JobsListProps>= ({jobs}) => {
  return (
    <div className=' items-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        jobs.map((job:   JobT, index : number) => <JobCard key={index} job={job} />)
      }
    </div>
  )
}

export default JobsList