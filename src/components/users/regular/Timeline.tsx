import React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { UserExperienceT } from '@/components/profile/container/Profile';


type TimelineItemElementProps = {
    experience:UserExperienceT
}

const TimelineItemElement: React.FC<TimelineItemElementProps> = ({ experience }) => {
    const { company, year, jobPosition } = experience
    return (
    <TimelineItem>
            <TimelineSeparator className='!-ml-64' >
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='text-sm'>
            <h6 className='text-sm'>{jobPosition}</h6>
            <p className='text-xs'>@{company} | {year}</p>
        </TimelineContent>
    </TimelineItem>
    )
}

export default TimelineItemElement