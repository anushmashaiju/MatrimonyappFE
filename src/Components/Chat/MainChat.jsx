import React, { useState } from 'react';
import ChatListComponent from './ChatList';
import ChatComponent from './Chat';
import './MainChat.css';
import MainNavbar from '../Matrimony/MainNavbar';

const MainChatComponent = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User A' },
    { id: 2, name: 'User B' },
    { id: 3, name: 'User C' },
    { id: 4, name: 'Demo User' } // Add demo user
  ]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
            <MainNavbar />
    <div className="main-chat">
      <div className="chat-sidebar">
        <ChatListComponent users={users} onSelectUser={handleSelectUser} />
      </div>
      <div className="chat-content">
        {selectedUser ? (
          <ChatComponent sender={{ id: 0, name: 'Current User' }} receiver={selectedUser} />
        ) : (
          <p>Please select a user to start chatting</p>
        )}
      </div>
    </div>
    </>
  );
};

export default MainChatComponent;
