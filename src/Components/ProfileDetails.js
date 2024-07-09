// ProfileDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import profilesData from './DemoProfile'; // Adjust the path as per your project structure

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = profilesData.find(profile => profile.id === id);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profile-details-container">
      <h2>{profile.name}'s Profile</h2>
      <p>Gender: {profile.gender}</p>
      <p>Age: {profile.age}</p>
      <p>Location: {profile.location}</p>
      <p>Religion: {profile.religion}</p>
      <p>Caste: {profile.caste}</p>
      <p>Education: {profile.education}</p>
      <p>Occupation: {profile.occupation}</p>
      <p>Annual Income: {profile.annualIncome}</p>
      <p>About: {profile.about}</p>
    </div>
  );
};

export default ProfileDetails;
