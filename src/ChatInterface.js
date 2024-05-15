// ChatInterface.js
import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function ChatInterface() {
  const [messages, setMessages] = useState([]);

  // Function to handle sending a message
  const sendMessage = (message) => {
    // Implement logic to send message
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Implement logic to receive response
    setMessages([...messages, { text: 'Response from ChatGPT', sender: 'bot' }]);
  };

  return (
    <div className="chat-interface">
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default ChatInterface;
