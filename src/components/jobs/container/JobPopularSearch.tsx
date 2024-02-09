import React from 'react'


type JobPopularSearchProps = {
    popularSearches : string[]
}
const JobPopularSearch:React.FC<JobPopularSearchProps> = ({popularSearches}) => {
  return (
    <div className='flex items-center gap-4'>
          <span>Popular searches : </span>
          {
              popularSearches.map((search:string, index:number) => <span key={index} className='font-medium'>{search}</span>)
          }
    </div>
  )
}

export default JobPopularSearch