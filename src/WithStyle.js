import React from 'react';
// style wrapp

const WithStyle = (BaseComp) => (props) => {
    console.log('WithStyle props',props);
    return <BaseComp {...props} style={{color:'green', backgroundColor: 'black'}}/>
}

export default WithStyle;