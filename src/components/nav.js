import React from 'react'
import styled from 'styled-components'
import me_c from '../img/me_center.png'
import me_l from '../img/me_left.png'
import me_l1 from '../img/me_left1.jpg'
import me_r1 from '../img/me_right1.jpg'
import me_r from '../img/me_right.png'
import History from '../history'

const Nav = () => {
    const [pic, setPic] = React.useState(me_c)
    const [showMe, setShowMe] = React.useState(true)

    document.onmousemove = (event) => {
        const {
            clientX
        } = event
        const half = window.innerWidth / 2
        const quarter = window.innerWidth / 4
        setPic(
            (clientX < half - 15)
                ? ((clientX < quarter)
                    ? me_l
                    : me_l1)
                : (clientX > half + 15)
                    ? ((clientX > (window.innerWidth - quarter))
                        ? me_r
                        : me_r1)
                :    
                    me_c
        )
    }
    
    return (
        <NavWrapper>
            <Brand onClick={() => History.push('/')}>
                <Logo className='App-logo'>jk</Logo>
                <span>joeknowles.com</span>
            </Brand>
            <div className='me'>
                <button onClick={() => setShowMe(!showMe)}>X</button>
                <img className={`${showMe ? 'open' : 'closed'}`} src={pic} alt='me' />
            </div>
            <NavButtons>
                <div>
                    <LeftButton onClick={() => History.push('/myapps')}>My Apps</LeftButton>
                    <RightButton onClick={() => History.push('/myresume')}>My Resume</RightButton>
                </div>
                <CodeButton onClick={() => History.push('/mycode')}>My Code</CodeButton>
            </NavButtons>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #444;
    padding: 0.25rem 0;
    border-radius: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .me {
        display: flex;
        flex-direction: column;
        button {
            background: none;
            width: 1rem;
            padding: 0;
            margin: 0;
            border-radius: 50%;
        }
    }
    img {
        border-radius: 50%;
        transition: 0.5s all ease;
    }
    .open {
        width: 75px;
        height: 75px;
    }
    .closed {
        width: 0;
        height: 0;
    }
    .left {
    }
    .right {
    }
`;

const NavButton = styled.button`
    padding: 0.35rem 1rem;
    margin: 0;
    :hover {
        background-color: aquamarine;
        cursor: pointer;
    }
`;

const CodeButton = styled(NavButton)`
    width: 100%;
    border-radius: 0 0 2rem 2rem;
`;

const LeftButton = styled(NavButton)`
    border-radius: 2rem 0 0 0;
`;

const RightButton = styled(NavButton)`
    border-radius: 0 2rem 0 0;
`;

const NavButtons = styled.div`
    margin-right: 1rem;
`;

const Brand = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.45rem;
    font-weight: bolder;
    text-shadow: 2px 2px black, 3px 3px white;
    color: aquamarine;
    background-color: #999;
    padding: 0.5rem;
    margin-left: 1rem;
    border-radius: 2rem;
    box-shadow: inset 0 0 10px 10px aqua;
    span {
        margin-right: 0.5rem;
        margin-bottom: 0.25rem;
        margin-left: 0.5rem;
    }
    @media (prefers-reduced-motion: no-preference) {
        .App-logo {
            animation: App-logo-spin infinite 20s linear;
        }
    }
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    :hover {
        box-shadow: 0 0 10px 10px aqua;
        cursor: pointer;
    }
`;

const Logo = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: black;
    border-radius: 50%;
    display: flex;
    align-items: top;
    justify-content: center;
    color: aqua;
    text-shadow: none;
`;

export default Nav
