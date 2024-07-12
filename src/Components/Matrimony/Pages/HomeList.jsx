import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomeList.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../MainNavbar';

const HomeList = () => {
  const [profiles, setProfiles] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({ location: '', religion: '', caste: '', education: '', occupation: '' });
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('body-background'); // Add background class to body

    return () => {
      document.body.classList.remove('body-background'); // Remove background class from body on unmount
    };
  }, []);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/opposite-gender-profiles', { withCredentials: true });
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

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
      (!occupation || profile.occupation.toLowerCase().includes(occupation.toLowerCase()))
    );
  };

  const filteredProfiles = profiles.filter(applyFilters);

  const handleProfileClick = (profileId) => {
    navigate(`/create/${profileId}`);
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
              <div key={profile._id} className="profile-card" onClick={() => handleProfileClick(profile._id)}>
                <p><strong>Occupation: </strong>{profile.occupation}</p>
                <p><strong>Religion: </strong>{profile.religion}</p>
                <p><strong>Caste: </strong>{profile.caste}</p>
                <p><strong>Income: </strong>{profile.userIncome}</p>
                {profile.location && (
                  <p><strong>Location: </strong>{profile.location.district}</p>
                )}
                {/* Add more profile details here */}
              </div>
            ))
          ) : (
            <p>No profiles found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeList;
