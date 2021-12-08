import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './components/Options';

const config = {
  botName: 'Katre Bot',
  initialMessages: [createChatBotMessage(`Hello, Welcome to the Chatbot introduction`, { widget: 'Options' })],
  widgets: [
    {
      widgetName: 'Options',
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
