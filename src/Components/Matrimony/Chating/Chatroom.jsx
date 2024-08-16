import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import './Chatroom.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socket = io('http://localhost:8000'); // Adjust the URL as needed

const Chatroom = ({ currentUser, selectedProfile, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/chats/messages/${currentUser.userId}/${selectedProfile.userId}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    socket.emit('join', currentUser.userId);

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, [currentUser.userId, selectedProfile.userId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    const message = {
      senderId: currentUser.userId,
      receiverId: selectedProfile.userId,
      message: newMessage,
      senderName: currentUser.name,
      receiverName: selectedProfile.name,
    };

    try {
      await axios.post('http://localhost:8000/chats/send', message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
      socket.emit('chat message', message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chatroom-container">
      <div className="chat-header">
        <h3>Chat with {selectedProfile.name}</h3>
        <FontAwesomeIcon icon={faCircleXmark} className="close-icon" onClick={onClose} />
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.senderId === currentUser.userId ? 'sent' : 'received'}`}>
            <p>
              <strong>{msg.senderId === currentUser.userId ? currentUser.name : selectedProfile.name}:</strong> {msg.message}
            </p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatroom;
