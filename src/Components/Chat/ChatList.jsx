import React from 'react';
import './ChatList.css';

const ChatListComponent = ({ users, onSelectUser }) => {
  if (!users || users.length === 0) {
    return <p>No users available</p>;
  }

  return (
    <div className="chat-list">
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatListComponent;
