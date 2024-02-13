import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

type ExperiencePanelProps = {
    experiences: { jobPosition : string, description : string, company : string, year : number}[],
}

type TimelineItemElementProps = {
     experience: { jobPosition : string, description : string, company : string, year : number}
}

const TimelineItemElement: React.FC<TimelineItemElementProps> = ({ experience }) => {
    const { company, year, jobPosition } = experience
    return (
    <TimelineItem>
        <TimelineSeparator className='!-ml-64'>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <h6 className='text-sm'>{jobPosition}</h6>
            <p className='text-xs'>@{company} | {year}</p>
        </TimelineContent>
    </TimelineItem>
    )
}

const ExperiencePanel:React.FC<ExperiencePanelProps> = ({experiences}) => {
  return (
        <div className='w-full min-w-[350px] md:min-w-[300px] lg:min-w-[200px] 3xl:min-w-[350px] flex flex-col gap-4 mt-5'>
            <div className='bg-dark w-full p-5 rounded-lg flex flex-col gap-4'>
                <h4 className="text-[16px] font-medium border-b border-primary border-solid w-fit">Experience</h4>
                <Timeline>
                    {
                      experiences.map((experience: { jobPosition: string, description: string, company : string, year : number }, index: number) => <TimelineItemElement key={index} experience={experience} />)
                    }
                </Timeline>
            </div>
        </div>
  )
}

export default ExperiencePanel