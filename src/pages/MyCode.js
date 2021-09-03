import React from 'react'
import styled from 'styled-components'
import CodeBox from '../components/code/codebox'

class MyCode extends React.PureComponent {

    state = {
        menu: [],
        project: [
            "Channel",
            "Avail",
            "FileDepot",
            "GigMap",
            "Qrator",
            "jk.com"
        ],
        language: [
            "Java",
            "Javascript"
        ],
        type: [
            "Web App",
            "Desktop",
            "Android",
            "Widgets"
        ]
    }

    componentDidMount() {
        this.setState({ menu: this.state.project });

    }

    changeMenu(e) {
        const { value } = e.target
        console.log(value)
        this.setState({menu: this.state[value]})
    }

    render() {
        return (
        <CodeWrapper>
            <span>
                My Code
            </span>
            <select onChange={this.changeMenu.bind(this)}>
                <option value='project'>By Project</option>
                <option value='language'>By Language</option>
                <option value='type'>By Type</option>
            </select>
            <Content>
                <Menu>
                    {this.state.menu.map((b, idx) => {
                        return <button key={idx} id={b}>{b}</button>
                    })}
                    </Menu>
                    <Tree>

                    </Tree>
                <Code>
                    <CodeBox />
                </Code>
            </Content>
        </CodeWrapper>
    )}
}

const Code = styled.div`
    border: 1px solid white;
    width: 45%;
`;

const Tree = styled.div`
    width: 40%;
    border: 1px solid white;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`;

const CodeWrapper = styled.div`
    color: white;
    span {
        margin-right: 1rem;
    }
    select {
        padding: 0.25rem;
    }
`;

export default MyCode
