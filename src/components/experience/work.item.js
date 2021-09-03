import React from 'react'
import styled from 'styled-components'

const WorkItem = ({job}) => {

    return (
        <WorkItemWrapper>
            <span><Title>{job.title}</Title>{` ${job.employer && '@'} ${job.employer}`}</span>
            <span className='dates'>{job.dates}</span>
        </WorkItemWrapper>
    )
}

const Title = styled.span`
    font-weight: bold;
`;

const WorkItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .dates {
        text-align: center;
        width: 110px;
    }
`;

export default WorkItem

// 