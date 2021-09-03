import React from 'react'
import styled from 'styled-components'
import AppItem from './app.item'
import data from '../../data.file'

class AppsPanel extends React.PureComponent {

    clicked(a) {
        console.log('clicked')
        this.props.select(a)
    }

    render() {
        return (
            <div>
                <Header>My Apps</Header>
                <AppsGrid>
                    {data.apps.map((a, idx) => {
                            return <AppItem clicked={this.clicked.bind(this)} key={idx} item={a} />
                    })}
                </AppsGrid>
            </div>
        )
    }
}

const Header = styled.div`
    margin: 1rem auto;
    text-align: center;
    font-weight: bolder;
    font-size: 2rem;
`;

const AppsGrid = styled.div`
    width: 90%;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 1rem;
`;

export default AppsPanel
