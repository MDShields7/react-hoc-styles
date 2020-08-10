import React from 'react';
import WithStyle from './WithStyle'
import TextComp from './TextComp'
import './App.css';

const App = () => {
  const StyledText = WithStyle(TextComp);
  return (
    <StyledText text='Hello World'></StyledText>
  );
}

export default App;
