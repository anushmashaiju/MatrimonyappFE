import React from 'react';
import './OnlineUsers.css'; // Assuming you have appropriate CSS for styling

const OnlineUsers = ({ allUsers }) => {
  if (!allUsers) {
    return <div>No users available</div>;
  }

  return (
    <div className="online-users">
      <h3>Online Users</h3>
      {allUsers.length === 0 ? (
        <p>No online users</p>
      ) : (
        <ul>
          {allUsers.map(user => (
            <li key={user.userId}>
              <div className="status-indicator" />
              <img
                src={`data:image/jpeg;base64,${user.profilePicture}`}
                alt={`${user.name}'s profile`}
                className="profileImage"
              />
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OnlineUsers;
