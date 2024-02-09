import React from 'react'
import { JobT } from '../Jobs'

type JobCardProps = {
    job : JobT
}
const JobCard:React.FC<JobCardProps> = ({job}) => {
  return (
      <div className='flex flex-col gap-5 bg-dark border-solid border-2 border-darkHeader shadow-lg p-10'>
          <h3>{job.title}</h3>
          <p>{ job.location}</p>
    </div>
  )
}

export default JobCard