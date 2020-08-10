import React from 'react';

// const TextComp = ({text, someProps}) => {
    // console.log('TextComp text',text);
    // console.log('TextComp someProps', someProps);
    // return <div {...someProps}>{text}</div>
// }
const TextComp = (props) => {
    console.log('TextComp props', props);
    return <div {...props} style={props.style}>{props.text}</div>
}

export default TextComp;