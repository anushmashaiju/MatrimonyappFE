import React, { useState } from 'react';
import './profile.css'; // Make sure to import the CSS file

const Profile = () => {
  const [profile, setProfile] = useState({
    profilePicture: '',
    basicDetails: {
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      motherTongue: '',
      state: '',
      district: '',
      address: '',
    },
    religiousDetails: {
      religion: '',
      caste: '',
      subcaste: '',
    },
    personalDetails: {
      maritalStatus: '',
      height: '',
      weight: '',
      familyStatus: '',
      familyType: '',
      familyValues: '',
      anyDisability: '',
    },
    professionalDetails: {
      highestEducation: '',
      employedIn: '',
      occupation: '',
      annualIncome: '',
    },
    lifestyle: {
      diet: '',
      drinking: '',
      smoking: '',
      hobbies: '',
    },
    about: '',
  });

  const handleChange = (section, field, value) => {
    setProfile(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    setProfile(prevState => ({
      ...prevState,
      profilePicture: e.target.files[0],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>User Details</h1>
      <h2>Profile Picture</h2>
      <div className="form-section">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      <h2>Basic Details</h2>
      <div className="form-section">
        <input
          type="text"
          placeholder="First Name"
          value={profile.basicDetails.firstName}
          onChange={(e) => handleChange('basicDetails', 'firstName', e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={profile.basicDetails.lastName}
          onChange={(e) => handleChange('basicDetails', 'lastName', e.target.value)}
        />
        <select
          value={profile.basicDetails.gender}
          onChange={(e) => handleChange('basicDetails', 'gender', e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="date"
          value={profile.basicDetails.dateOfBirth}
          onChange={(e) => handleChange('basicDetails', 'dateOfBirth', e.target.value)}
        />
        <input
          type="text"
          placeholder="Mother Tongue"
          value={profile.basicDetails.motherTongue}
          onChange={(e) => handleChange('basicDetails', 'motherTongue', e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          value={profile.basicDetails.state}
          onChange={(e) => handleChange('basicDetails', 'state', e.target.value)}
        />
        <input
          type="text"
          placeholder="District"
          value={profile.basicDetails.district}
          onChange={(e) => handleChange('basicDetails', 'district', e.target.value)}
        />
        <textarea
          placeholder="Address"
          value={profile.basicDetails.address}
          onChange={(e) => handleChange('basicDetails', 'address', e.target.value)}
        />
      </div>

      <h2>Religious Details</h2>
      <div className="form-section">
        <input
          type="text"
          placeholder="Religion"
          value={profile.religiousDetails.religion}
          onChange={(e) => handleChange('religiousDetails', 'religion', e.target.value)}
        />
        <input
          type="text"
          placeholder="Caste"
          value={profile.religiousDetails.caste}
          onChange={(e) => handleChange('religiousDetails', 'caste', e.target.value)}
        />
        <input
          type="text"
          placeholder="Subcaste"
          value={profile.religiousDetails.subcaste}
          onChange={(e) => handleChange('religiousDetails', 'subcaste', e.target.value)}
        />
      </div>

      <h2>Personal Details</h2>
      <div className="form-section">
        <select
          value={profile.personalDetails.maritalStatus}
          onChange={(e) => handleChange('personalDetails', 'maritalStatus', e.target.value)}
        >
          <option value="">Select Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
        <input
          type="number"
          placeholder="Height (in cm)"
          value={profile.personalDetails.height}
          onChange={(e) => handleChange('personalDetails', 'height', e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (in kg)"
          value={profile.personalDetails.weight}
          onChange={(e) => handleChange('personalDetails', 'weight', e.target.value)}
        />
        <input
          type="text"
          placeholder="Family Status"
          value={profile.personalDetails.familyStatus}
          onChange={(e) => handleChange('personalDetails', 'familyStatus', e.target.value)}
        />
        <input
          type="text"
          placeholder="Family Type"
          value={profile.personalDetails.familyType}
          onChange={(e) => handleChange('personalDetails', 'familyType', e.target.value)}
        />
        <input
          type="text"
          placeholder="Family Values"
          value={profile.personalDetails.familyValues}
          onChange={(e) => handleChange('personalDetails', 'familyValues', e.target.value)}
        />
        <select
          value={profile.personalDetails.anyDisability}
          onChange={(e) => handleChange('personalDetails', 'anyDisability', e.target.value)}
        >
          <option value="">Any Disability?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <h2>Professional Details</h2>
      <div className="form-section">
        <input
          type="text"
          placeholder="Highest Education"
          value={profile.professionalDetails.highestEducation}
          onChange={(e) => handleChange('professionalDetails', 'highestEducation', e.target.value)}
        />
        <input
          type="text"
          placeholder="Employed In"
          value={profile.professionalDetails.employedIn}
          onChange={(e) => handleChange('professionalDetails', 'employedIn', e.target.value)}
        />
        <input
          type="text"
          placeholder="Occupation"
          value={profile.professionalDetails.occupation}
          onChange={(e) => handleChange('professionalDetails', 'occupation', e.target.value)}
        />
        <input
          type="number"
          placeholder="Annual Income"
          value={profile.professionalDetails.annualIncome}
          onChange={(e) => handleChange('professionalDetails', 'annualIncome', e.target.value)}
        />
      </div>

      <h2>Lifestyle</h2>
      <div className="form-section">
        <select
          value={profile.lifestyle.diet}
          onChange={(e) => handleChange('lifestyle', 'diet', e.target.value)}
        >
          <option value="">Diet</option>
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
        </select>
        <select
          value={profile.lifestyle.drinking}
          onChange={(e) => handleChange('lifestyle', 'drinking', e.target.value)}
        >
          <option value="">Drinking</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select
          value={profile.lifestyle.smoking}
          onChange={(e) => handleChange('lifestyle', 'smoking', e.target.value)}
        >
          <option value="">Smoking</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <textarea
          placeholder="Hobbies"
          value={profile.lifestyle.hobbies}
          onChange={(e) => handleChange('lifestyle', 'hobbies', e.target.value)}
        />
      </div>

      <h2>About</h2>
      <div className="form-section">
        <textarea
          placeholder="Write about yourself"
          value={profile.about}
          onChange={(e) => handleChange('', 'about', e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Profile;
