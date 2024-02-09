import React from 'react'
import { JobT } from '../Jobs'
import JobCard from '../regular/JobCard'

type JobsListProps = {
  jobs : JobT[]
}
const JobsList:React.FC<JobsListProps>= ({jobs}) => {
  return (
    <div className='flex items-center gap-10 flex-wrap'>
      {
        jobs.map((job: JobT) => <JobCard key={job.id} job={job} />)
      }
    </div>
  )
}

export default JobsList