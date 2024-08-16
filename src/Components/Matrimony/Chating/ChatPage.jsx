import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatList from './ChatList';
import ChatRoom from './Chatroom';
import OnlineUsers from './OnlineUsers';
import './ChatPage.css';
import MainNavbar from '../MainNavbar';

const ChatPage = ({ userId }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [chattedUsers, setChattedUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/currentregister-details/${userId}`, { withCredentials: true });
        setCurrentUser(response.data);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchCurrentUser();
  }, [userId]);

  useEffect(() => {
    const fetchProfiles = async () => {
      if (!currentUser) return;

      try {
        const registerResponse = await axios.get('http://localhost:8000/user/all-register-details', { withCredentials: true });
        const registerData = registerResponse.data.map(profile => ({
          userId: profile.userId,
          name: profile.basicDetails.name,
          gender: profile.basicDetails.gender,
          profilePicture: profile.basicDetails.profilePicture,
        }));

        // Filter opposite gender users
        const oppositeGenderUsers = registerData.filter(profile => profile.gender !== currentUser.basicDetails.gender);
        setAllUsers(oppositeGenderUsers);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    const fetchChattedUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/chats/chattedUsers/${userId}`);
        const chattedUsersData = response.data.map(user => ({
          ...user,
          profilePicture: user.basicDetails.profilePicture,
        }));
        setChattedUsers(chattedUsersData || []);
      } catch (error) {
        console.error('Error fetching chatted users:', error);
      }
    };

    fetchProfiles();
    fetchChattedUsers();
  }, [currentUser, userId]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseChat = () => {
    setSelectedUser(null);
  };

  return (
    <>
      <MainNavbar />
      <div className="chat-page">
        <div className="online-users-container">
          <OnlineUsers allUsers={allUsers} />
        </div>
        <div className="chat-list-container">
          <ChatList users={allUsers} onUserClick={handleUserClick} />
        </div>
        <div>
          {selectedUser ? (
            <ChatRoom
              currentUser={currentUser}
              selectedProfile={selectedUser}
              onClose={handleCloseChat}
            />
          ) : (
            <p>Select a user to start chatting</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatPage;
