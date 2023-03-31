import React, { useEffect } from 'react';

export const Chatbot = () => {
  useEffect(() => {
    window.dfMessenger = {
      sendText: function (text) {
        // Send user input to chatbot
        console.log(text);
      },
    };
    loadChatbot();
  }, []);

  const loadChatbot = () => {
    // Load the chatbot widget
    window.dfMessengerSettings = {
      projectId: 'decor-dash',
      accessToken: '<your access token>',
      chatTitle: 'Chat with our support',
    };
    window.dfMessenger.init();
  };

  return <div id="dialogflow-chatbot" />;
};