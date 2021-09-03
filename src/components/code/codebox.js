import React from 'react'
import styled from 'styled-components'
import prettier from "prettier/standalone";
import babylon from "prettier/parser-babel";

const CodeBox = () => {

    const [code, setCode] = React.useState(`
        const a = "abc";


                const b = 'a'


           console.log(a);
           
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

  `);

    const formatCode = () => {
        const formattedCode = prettier.format(code, {
            parser: "babel",
            plugins: [babylon]
        });

        setCode(formattedCode);
    };
    
    return (
        <BoxWrapper>
            <code
                style={{ height: "600px", width: "100%", display: "block", color: 'white' }}
                defaultValue={code}
            />
            <button onClick={formatCode}>Format Code with Prettier</button>
        </BoxWrapper>
    )
}

const BoxWrapper = styled.div`

`;

export default CodeBox



