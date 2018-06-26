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

const acceptedFileTypes = [
  'image/png',
  'image/jpeg',
];

const steps = [
  {
    id: '1',
    message: 'Test',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    enableFiles: true,
    addOptions: [
      { value: '1', label: 'Number 1',trigger:'3'},
      { value: '2', label: 'Number 2',trigger:'4'},
      { value: '3', label: 'Number 3',trigger:'3'},
    ],
    trigger: '3'
  },
  {
    id: '3',
    message: 'Ok',
    trigger: '1'
  },
  {
    id: '4',
    message: 'Awesome',
    end: true
  }
];

const handleEnd = ({ steps, values }) => {
  // console.log(steps);
  // console.log(values);
  console.log(values);
}

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot
      acceptedFileTypes={acceptedFileTypes}
      handleEnd={handleEnd}
      steps={steps}
    />
  </ThemeProvider>
);

export default ThemedExample;
