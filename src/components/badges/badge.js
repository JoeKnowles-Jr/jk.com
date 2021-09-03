import React from 'react'
import styled from 'styled-components'

const Badge = ({image}) => {

    return (
        <BadgeWrapper>
            <img src={image} alt='tech badge' />
        </BadgeWrapper>
    )
}

const BadgeWrapper = styled.div`
    img {
        border-radius: 50%;
        width: 48px;
    }
`;

export default Badge