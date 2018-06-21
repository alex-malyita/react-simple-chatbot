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
    end: true,
  },
];


const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'What number I am thinking?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '4',
          addOptions: [
            { value: 1, label: 'Number 1', trigger: '4' },
            { value: 2, label: 'Number 2', trigger: '3' },
            { value: 3, label: 'Number 3', trigger: '3' },
          ],
        },
        {
          id: '3',
          message: '3 step',
          trigger: '4',
        },
        {
          id: '4',
          message: 'Awesome! You are a telepath!',
          end: true,
        },
      ]}
    />
  </ThemeProvider>
);

export default ThemedExample;
