import React from 'react'
import styled from 'styled-components'
import Badge from './badge'
import java from '../../img/java.jpg'
import express from '../../img/express.png'
import mongo from '../../img/mongo.png'
import node from '../../img/node.png'
import react from '../../img/react.png'
import redux from '../../img/redux.png'
import spring from '../../img/spring.png'
import web3 from '../../img/web3.png'

const badgeImages = [web3, node, express, mongo, react, redux, java, spring ]

const BadgesPanel = () => {

    return (
        <BadgesWrapper>
            <Title>Technologies</Title>
            <BadgeContainer>
                {badgeImages.map((img, idx) => {
                    return <Badge image={img} key={idx} />
                })}
            </BadgeContainer>
        </BadgesWrapper>
    )
}

const Title = styled.span`
    font-weight: bold;
    color: white;
`;

const BadgeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1rem auto;
    background-color: #aaa;
    border-radius: 2rem;
    padding: 0.5rem;
`;

const BadgesWrapper = styled.div`
    margin-top: 1rem;
    text-align: center;
    color: white;
`;

export default BadgesPanel
