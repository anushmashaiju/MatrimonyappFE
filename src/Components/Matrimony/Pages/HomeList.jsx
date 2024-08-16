import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomeList.css';
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../MainNavbar';
import Chatroom from '../Chating/Chatroom'; // Import the Chatroom component

const HomeList = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentUser, setCurrentUser] = useState({ userId: '', gender: '', name: '' });
  const [filterCriteria, setFilterCriteria] = useState({ location: '', religion: '', caste: '', education: '', occupation: '' });
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    document.body.classList.add('body-background');

    return () => {
      document.body.classList.remove('body-background');
    };
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async (userId) => {
      try {
        const response = await axios.get(`http://localhost:8000/user/currentregister-details/${userId}`, { withCredentials: true });
        const currentUser = response.data;
        setCurrentUser({
          userId: currentUser.userId,
          name: currentUser.basicDetails.name,
          gender: currentUser.basicDetails.gender,
        });
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };
    const fetchProfiles = async () => {
      try {
        const registerResponse = await axios.get('http://localhost:8000/user/all-register-details', { withCredentials: true });
        const registerData = registerResponse.data.reduce((acc, profile) => {
          acc[profile.userId] = {
            userId: profile.userId,
            name: profile.basicDetails.name,
            age: profile.basicDetails.age,
            gender: profile.basicDetails.gender,
          };
          return acc;
        }, {});

        const personalResponse = await axios.get('http://localhost:8000/user/all-personal-details', { withCredentials: true });
        const personalData = personalResponse.data;

        const mergedData = personalData.map(profile => ({
          ...registerData[profile.userId],
          occupation: profile.occupation,
          religion: profile.religion,
          caste: profile.caste,
          income: profile.userIncome,
          location: profile.location,
        }));

        setProfiles(mergedData);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchCurrentUser();
    fetchProfiles();
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterCriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const applyFilters = (profile) => {
    const { location, religion, caste, education, occupation } = filterCriteria;
    return (
      (!location || (profile.location && profile.location.district.toLowerCase().includes(location.toLowerCase()))) &&
      (!religion || profile.religion.toLowerCase().includes(religion.toLowerCase())) &&
      (!caste || profile.caste.toLowerCase().includes(caste.toLowerCase())) &&
      (!education || profile.education.toLowerCase().includes(education.toLowerCase())) &&
      (!occupation || profile.occupation.toLowerCase().includes(occupation.toLowerCase())) &&
      (currentUser.gender === 'male' ? profile.gender === 'female' : profile.gender === 'male')
    );
  };

  const filteredProfiles = profiles.filter(applyFilters);

  const handleProfileClick = (userId) => {
    navigate(`/userpage/${userId}`);
    console.log('handleprofile', userId);
  };

  const handleRequest = async (profile) => {
    try {
      const payload = {
        senderId: currentUser.userId,
        receiverId: profile.userId,
        senderName: currentUser.name,
      };
      console.log('Request Payload:', payload);

      const response = await axios.post('http://localhost:8000/user/requests', payload, { withCredentials: true });
      console.log('Response:', response);

      setProfiles(prevProfiles =>
        prevProfiles.map(p =>
          p.userId === profile.userId ? { ...p, requestStatus: 'Pending' } : p
        )
      );
    } catch (error) {
      console.error('Error sending request:', error.response ? error.response.data : error.message);
    }
  };

  const handleShortlist = async (userId) => {
    try {
      await axios.post('http://localhost:8000/user/shortlist', {
        userId,
      }, { withCredentials: true });

      setProfiles(prevProfiles =>
        prevProfiles.map(p =>
          p.userId === userId ? { ...p, shortlisted: true } : p
        )
      );
    } catch (error) {
      console.error('Error shortlisting profile:', error);
    }
  };

  const handleMessage = (profile) => {
    if (!selectedProfiles.find(p => p.userId === profile.userId)) {
      setSelectedProfiles([...selectedProfiles, profile]);
    }
  };
  const handleCloseChatroom = (userId) => {
    setSelectedProfiles(selectedProfiles.filter(profile => profile.userId !== userId));
  };
  return (
    <>
      <MainNavbar />
      <div className="profiles-container">
        <h2>Profiles</h2>
        <div className="filter-inputs">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filterCriteria.location}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="religion"
            placeholder="Religion"
            value={filterCriteria.religion}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="caste"
            placeholder="Caste"
            value={filterCriteria.caste}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={filterCriteria.occupation}
            onChange={handleFilterChange}
          />
          <button onClick={() => setFilterCriteria({ location: '', religion: '', caste: '', education: '', occupation: '' })}>Clear Filters</button>
        </div>

        <div className="profile-grid">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map(profile => (
              <div key={profile.userId} className="profile-card" onClick={() => handleProfileClick(profile.userId)}>
                <p><strong>Name: </strong>{profile.name}</p>
                <p><strong>Age: </strong>{profile.age}</p>
                <p><strong>Gender: </strong>{profile.gender}</p>
                <p><strong>Occupation: </strong>{profile.occupation}</p>
                <p><strong>Religion: </strong>{profile.religion}</p>
                <p><strong>Caste: </strong>{profile.caste}</p>
                <p><strong>Income: </strong>{profile.income}</p>
                {profile.location && (
                  <p><strong>Location: </strong>{profile.location.district}</p>
                )}
                <div className="profile-buttons">
                  {profile.requestStatus === 'Pending' ? (
                    <button disabled>Pending</button>
                  ) : (
                    <button onClick={(e) => { e.stopPropagation(); handleRequest(profile); }}>Request</button>
                  )}
                  {!profile.shortlisted ? (
                    <button onClick={(e) => { e.stopPropagation(); handleShortlist(profile.userId); }}>Shortlist</button>
                  ) : (
                    <button disabled>Shortlisted</button>
                  )}
                  <button onClick={(e) => { e.stopPropagation(); handleMessage(profile); }}>Message</button>
                </div>
              </div>
            ))
          ) : (
            <p>No profiles found.</p>
          )}
        </div>
      </div>

      {selectedProfiles.length > 0 && selectedProfiles.map(profile => (
        <Chatroom key={profile.userId} currentUser={currentUser} selectedProfile={profile} 
         onClose={() => handleCloseChatroom(profile.userId)}/>
      ))}
    </>
  );
};

export default HomeList;
