import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import io from 'socket.io-client';
import './Chat.css'; // Import the CSS file

//const socket = io('http://localhost:8000'); // Replace with your server URL

const ChatComponent = ({ sender, receiver }) => {
  const { userId } = useParams(); // Get userId from route params (unused in this example)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    document.body.classList.add('body-background'); // Add background class to body

    return () => {
      document.body.classList.remove('body-background'); // Remove background class from body on unmount
    };
  }, []);
  /*useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages([...messages, msg]);
    });
  }, [messages]);
*/
  const sendMessage = () => {
    if (message.trim() !== '') {
      const msg = {
        sender: sender ? sender.name || 'You' : 'You',
        receiver: receiver ? receiver.name : '',
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Add time
      };
    /*  socket.emit('chat message', msg);
      setMessages([...messages, msg]);
      setMessage('');
    }*/
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>{receiver?.name}</h2>
        <button className="full-profile-button">Full Profile</button>
        <button className="report-misuse-button">Report Misuse</button>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === 'You' ? 'sender' : 'receiver'}`}>
            <span className="message-text">{msg.text}</span>
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage} className="send-button">Send</button>
      </div>
    </div>
  );
};
}
export default ChatComponent;
