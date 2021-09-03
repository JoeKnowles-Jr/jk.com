import React from 'react'
import styled from 'styled-components'
import WorkItem from './work.item'
import data from '../../data.file'

const ExperiencePanel = () => {

    return (
        <ExperienceContainer>
            <Title>Professional Experience</Title>
            {data.jobs.map((j, idx) => {
                return <WorkItem key={idx} job={j} />
            })}
        </ExperienceContainer>
    )
}

const Title = styled.div`
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
`;

const ExperienceContainer = styled.div`
`;

export default ExperiencePanel