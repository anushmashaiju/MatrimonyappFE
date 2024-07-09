import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilesData from './DemoProfile'; // Adjust the path as per your project structure
import './Home.css'; // Import CSS for styling
import MainNavbar from './MainNavbar';

const ProfilesComponent = () => {
    const [filterCriteria, setFilterCriteria] = useState({ location: '', religion: '', caste: '', education: '', occupation: '' });
  
    const navigate = useNavigate();

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const filteredProfiles = profilesData.filter(profile => {
        return (
            profile.location.toLowerCase().includes(filterCriteria.location.toLowerCase()) &&
            profile.religion.toLowerCase().includes(filterCriteria.religion.toLowerCase()) &&
            profile.caste.toLowerCase().includes(filterCriteria.caste.toLowerCase()) &&
            profile.education.toLowerCase().includes(filterCriteria.education.toLowerCase()) &&
            profile.occupation.toLowerCase().includes(filterCriteria.occupation.toLowerCase())
        );
    });

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
                        name="education"
                        placeholder="Education"
                        value={filterCriteria.education}
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
                <div className="profiles-grid">
                    {filteredProfiles.length > 0 ? (
                        filteredProfiles.map(profile => (
                            <div
                                key={profile.id}
                                className="profile-card"
                                onClick={() => handleProfileClick(profile.id)}
                            >
                                <h3>{profile.name}</h3>
                                <p>{profile.gender}</p>
                                <p>Age: {profile.age}</p>
                                <p>Location: {profile.location}</p>
                                <p>Religion: {profile.religion}</p>
                                <p>Caste: {profile.caste}</p>
                                <p>Education: {profile.education}</p>
                                <p>Occupation: {profile.occupation}</p>
                                <p>Annual Income: {profile.annualIncome}</p>
                                <p>About: {profile.about}</p>
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

export default ProfilesComponent;
