import React from 'react';
import './Chatlist.css'; // Assuming you have appropriate CSS for styling

const ChatList = ({ users, onUserClick }) => {
  return (
    <div className="chat-list">
      <h3>Users</h3>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.userId} onClick={() => onUserClick(user)}>
              {user.profilePicture ? (
                <img
                  src={`data:image/jpeg;base64,${user.profilePicture}`}
                  alt={`${user.name}'s profile`}
                  className="profileImage"
                />
              ) : (
                <div className="default-profile-image"></div> // Placeholder for users without a profile picture
              )}
              {user.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users to display.</p>
      )}
    </div>
  );
};

export default ChatList;
