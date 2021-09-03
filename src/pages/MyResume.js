import React from 'react'
import styled from 'styled-components'
import Resume from '../components/resume/resume'

const MyResume = () => {

    return (
        <MyResumeWrapper>
            <fieldset>
                <legend>
                    <span>Updated: 05Aug21</span>
                </legend>
                <Resume />
            </fieldset>
        </MyResumeWrapper>
    )

}

const MyResumeWrapper = styled.div`
    color: #aaa;
    background-color: #345;
    padding: 0.5rem;
    @media(min-width: 768px) {
        width: 75%;
        margin: 0 auto;
    }
    @media(min-width: 1200px) {
        width: 55%;
        margin: 0 auto;
    }
`;

export default MyResume