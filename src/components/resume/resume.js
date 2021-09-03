import React from 'react'
import styled from 'styled-components'
import BadgesPanel from '../badges/badges.panel'
import EducationPanel from '../education/education.panel'
import ExperiencePanel from '../experience/experience.panel'

const Resume = ({ authenticated }) => {

    return (
        <ResumeWrapper>
            <Name>Joseph Knowles</Name>
            <ContactInfo>
                {authenticated ? <span>682-283-1843</span> : <span>xxx-xxx-xxx</span>} | <a href='mailto:joeknowles@joeknowles.com'>joeknowles@joeknowles.com</a> | <span>Richardson, TX</span>
            </ContactInfo>
            <hr />
            <Description>
                Full-stack developer experienced in Java, Spring, HTML/CSS/JavaScript, Node/Express, React/Redux, and Android development.
                Named a top Java performer in the Merit America program's alpha cohort. Experience includes independent tech project development
                and a demonstrated history of excellent customer service, self-motivation, and time management skills.
            </Description>
            <BadgesPanel />
            <EducationPanel />
            <ExperiencePanel />
        </ResumeWrapper>
    )
}

const Description = styled.div`
    margin-top: 0.5rem;
    font-size: 0.85rem;
`;

const ContactInfo = styled.div`
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Name = styled.div`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const ResumeWrapper = styled.div`
`;

export default Resume
