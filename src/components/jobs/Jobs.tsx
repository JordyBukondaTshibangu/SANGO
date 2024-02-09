'use client'
import React from 'react'
import JobFilter from './container/JobFilter';
import JobPopularSearch from './container/JobPopularSearch';
import JobsList from './container/JobsList';

const popularSearch = ['Front-end', 'Back-end', 'Development', 'PHP', 'Laravel', 'React', 'Vue', 'Nuxt', 'Next', 'Developer', 'Team Lead', 'Javascript'];

export type JobT = {
  id : number,
  title: string,
  period : string,
  company: string,
  location: string,
  description: string,
  requirements: string [],
  salary: string,
  image : string,
  category: string,
}

type JobContainerProps = {
  jobs : JobT[]
}
const JobContainer:React.FC<JobContainerProps> = ({jobs}) => {

  const searchJob = () => { };
  const searchLocation = () => { };
  const showFilters = () => { };
  return (
    <div className='flex flex-col gap-8'>
      <JobFilter
        searchJob={searchJob}
        searchLocation={searchLocation}
        showFilters={showFilters}
      />
      <JobPopularSearch popularSearches={popularSearch} />
      <JobsList jobs={jobs} />
    </div>
  )
}

export default JobContainer