import React from 'react'
import styled from 'styled-components'
import jk from '../../img/jk_icon.png'
import fms from '../../img/fms.png'

const AppItem = ({ item, clicked }) => {

    return (
        <AppItemWrapper onClick={() => clicked(item)}>
            <h3>
                {item.name}
            </h3>
            <img className='ico' src={fms} alt='follow my senator' />
            {item.description && item.description}
            <BackGround src={jk}/>
        </AppItemWrapper>
    )
}

const BackGround = styled.img`
    width: 85%;
    height: 85%;
    position: absolute;
    top: 7%;
    left: 7%;
    opacity: 0.2;
    z-index: -1;
`;

const AppItemWrapper = styled.a`
    width: 100%;
    height: 10rem;
    position: relative;
    border: 1px solid black;
    text-align: center;
    padding: 0.5rem;
    text-decoration: none;
    color: white;
    .ico {
        border-radius: 50%;
        width: 64px;
        position: absolute;
        top: 1rem;
        left: 1rem;
    }
    :hover {
        border: 1px solid aquamarine;
    }
`;

export default AppItem