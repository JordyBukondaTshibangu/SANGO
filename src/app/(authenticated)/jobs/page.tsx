
import React from 'react';
import JobContainer from '@/components/jobs/Jobs'

async function fetchAllJobs() {
  const res = await fetch('http://127.0.0.1:8080/jobs.json', { cache : 'force-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch Jobs')
  }

  return res.json()
  }

const JobsPage = async () => {

  const jobs = await fetchAllJobs() 

  return (
    <div className='flex flex-col gap-8'>
      <JobContainer jobs={jobs} />
    </div>
  )
}

export default JobsPage