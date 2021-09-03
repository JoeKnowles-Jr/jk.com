import React from 'react'
import styled from 'styled-components'

const Home = () => {

    return (
        <HomeWrapper>
            <p>
                Welcome to my work in progress!
            </p>
            <div className='main'>

            </div>
            {/* <div className='section-wrapper'>
                <button className='section'>
                    My Coding Interests
                </button>
                <button className='section'>
                    My Coding Story
                </button>
            </div> */}
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    padding: 1rem;
    min-height: 70vh;
    text-align: center;
    p {
        color: white;
        font-size: 1.5rem;
        text-shadow: 1px 1px 1px white, 2px 2px 2px white, 3px 3px 3px white;
    }
    .main {
        min-height: 25vh;
    }
    .section-wrapper {
        display: flex;
        justify-content: space-around;
        .section {
            border: 1px solid blue;
            border-radius: 3rem;
            color: blue;
            background-color: aquamarine;
            text-shadow: 2px 2px 2px white;
            padding: 5rem;
            font-size: 2rem;
            :hover {
                background-color: aqua;
                cursor: pointer;
            }
        }
    }
`;

export default Home