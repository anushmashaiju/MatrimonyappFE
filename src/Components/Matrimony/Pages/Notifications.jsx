import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/notifications', { withCredentials: true });
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleAccept = async (notificationId) => {
    try {
      await axios.post(`http://localhost:8000/user/notifications/${notificationId}/accept`, {}, { withCredentials: true });
      setNotifications(notifications.map(notification =>
        notification._id === notificationId ? { ...notification, status: 'Accepted' } : notification
      ));
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const handleReject = async (notificationId) => {
    try {
      await axios.post(`http://localhost:8000/user/notifications/${notificationId}/reject`, {}, { withCredentials: true });
      setNotifications(notifications.filter(notification => notification._id !== notificationId));
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map(notification => (
          <div key={notification._id} className="notification-card">
            <div className="notification-message">
              {notification.message} {notification.status && `(${notification.status})`}
            </div>
            {notification.type === 'request' && !notification.status && (
              <div className="notification-buttons">
                <button className="accept-btn" onClick={() => handleAccept(notification._id)}>Accept</button>
                <button className="reject-btn" onClick={() => handleReject(notification._id)}>Reject</button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No notifications.</p>
      )}
    </div>
  );
};

export default Notifications;
