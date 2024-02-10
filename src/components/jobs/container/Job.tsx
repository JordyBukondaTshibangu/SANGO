import React from 'react'
import { JobT } from '../Jobs'
import JobHeader from '../regular/JobHeader'
import JobSideInfo from '../regular/JobSideInfo'
import JobDescription from '../regular/JobDescription'
import JobCard from '../regular/JobCard'



type JobProps = {
    job: JobT,
    relatedJobs : JobT[]
}

const Job: React.FC<JobProps> = ({ job, relatedJobs }) => {

    const { image, title, company, period, salary, location, description, requirements, desirables, benefits } = job;

    return (
        <div className='flex flex-col gap-14'>
            <JobHeader image={image} title={title} company={company} period={period} />
            <div className="w-full flex flex-col lg:flex-row gap-20 lg:gap-32">
                <JobDescription description={description} requirements={requirements} desirables={desirables} benefits={benefits}/>
                <JobSideInfo
                    salary={salary}
                    location={location}
                    postedAt='14 Jun,2021'
                    expiresIn='14 Aug, 2021'
                    education='Bachelor'
                    experience={4}
                    level='Entry Level'
                />
            </div> 
            <hr />
            <div className='flex flex-col gap-10 mt-10'>
                <h2 className='text-4xl font-medium'>Related Jobs</h2>
                <div className=' items-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    relatedJobs.map((job:   JobT, index : number) => <JobCard key={index} job={job} />)
                }
                </div>
            </div>
        </div>
    )
}

export default Job