import React from 'react'
import styled from 'styled-components'

const AppDetail = ({app, close}) => {

    return (
        <AppDetailWrapper onClick={() => close()}>
            <button>X</button>
            <div className='frame'>
                <iframe title={app.name} src={app.link} sandbox='allow-scripts' />
            </div>
        </AppDetailWrapper>
    )
}

const AppDetailWrapper = styled.div`
    width: 100%;
    .frame {
        width: 100%;
        text-align: right;
        iframe {
            width: 75%;
            height: 75vh;
        }
    }
`;

export default AppDetail