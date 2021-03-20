import React, {useState} from 'react';
import ReactFullPage from '@fullpage/react-fullpage'

function Calculator(props) {
    const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

    const [sectionsColor, setSectiionsColor] = useState(originalColors);
    const [fullPages, setFullPages] = useState([{text: "Section 1"}, {text: "Section 2"}, {text: "Section 3"}])

    return (
        <ReactFullPage navigation sectionsColor={sectionsColor} render={component => {
            return <ReactFullPage.Wrapper>
                {fullPages && fullPages.map(({text}) => {
                    return <h1 key={text}>{text}</h1>
                })}
            </ReactFullPage.Wrapper>
        }}/>
    );
}

export default Calculator;