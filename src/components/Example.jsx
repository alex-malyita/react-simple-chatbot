import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hello World',
    trigger: '2'
  },{
    id: '2',
    user: true,
    trigger: '3'
  },{
    id: '3',
    message: 'By',
    end: true,
  }
];


const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot
      enterNewLineKey="Enter"
      holdNewLineKey="ctrlKey"
      steps={steps}
    />
  </ThemeProvider>
);

export default ThemedExample;
