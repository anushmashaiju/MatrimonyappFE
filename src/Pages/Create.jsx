import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPersonalDetails } from '../Redux/userSlice'; // Import action
import MainNavbar from '../Components/MainNavbar';

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch
  const [personalDetails, setPersonalDetailsState] = useState({
    userId:'',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    noOfSiblings: '',
    noOfBrothers: '',
    noOfSisters: '',
    noOfMarried: '',
    noOfUnmarried: '',
    familyClass: '',
    familyValue: '',
    userIncome: '',
    occupation: '',
    height: '',
    weight:'' ,
    complexion: '',
    disability: '',
    religion: '',
    caste: '',
    subCaste: '',
    location: {
      state: '',
      district: '',
    },
    horoscope: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'noOfSiblings' && value === '0') {
      setPersonalDetailsState({
        ...personalDetails,
        [name]: value,
        noOfBrothers: 0,
        noOfSisters: 0,
        noOfMarried: 0,
        noOfUnmarried: 0,
      });
    } else {
      setPersonalDetailsState({
        ...personalDetails,
        [name]: value,
      });
    }
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetailsState({
      ...personalDetails,
      location: {
        ...personalDetails.location,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to backend API
      await axios.post('http://localhost:8000/userpersonal/personal-details', { personalDetails });

      // Dispatch personal details to Redux
      dispatch(setPersonalDetails(personalDetails));

      // Redirect to the next page
      navigate('/preference', { state: { personalDetails } });
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  const handleNextClick = () => {
    navigate('/preview');
  };

  return (
    <>
      <MainNavbar />
      <form onSubmit={handleSubmit} className="profile-form">
        <h2 className="form-title">Let's create Profile now</h2>
        <div className="form-group">
          <label htmlFor="formFatherName">Father's Name</label>
          <input type="text" id="formFatherName" name="fatherName" value={personalDetails.fatherName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formFatherOccupation">Father's Occupation</label>
          <input type="text" id="formFatherOccupation" name="fatherOccupation" value={personalDetails.fatherOccupation} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formMotherName">Mother's Name</label>
          <input type="text" id="formMotherName" name="motherName" value={personalDetails.motherName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formMotherOccupation">Mother's Occupation</label>
          <input type="text" id="formMotherOccupation" name="motherOccupation" value={personalDetails.motherOccupation} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formNoOfSiblings">Number of Siblings</label>
          <input type="number" id="formNoOfSiblings" name="noOfSiblings" value={personalDetails.noOfSiblings} onChange={handleChange} required />
        </div>
        {personalDetails.noOfSiblings > 0 && (
          <>
            <div className="form-group">
              <label htmlFor="formNoOfBrothers">Number of Brothers</label>
              <input type="number" id="formNoOfBrothers" name="noOfBrothers" value={personalDetails.noOfBrothers} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="formNoOfSisters">Number of Sisters</label>
              <input type="number" id="formNoOfSisters" name="noOfSisters" value={personalDetails.noOfSisters} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="formNoOfMarried">Number of Married</label>
              <input type="number" id="formNoOfMarried" name="noOfMarried" value={personalDetails.noOfMarried} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="formNoOfUnmarried">Number of Unmarried</label>
              <input type="number" id="formNoOfUnmarried" name="noOfUnmarried" value={personalDetails.noOfUnmarried} onChange={handleChange} required />
            </div>
          </>
        )}
        <div className="form-group">
          <label htmlFor="formFamilyClass">Family Class</label>
          <select id="formFamilyClass" name="familyClass" value={personalDetails.familyClass} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Upper Class">Upper Class</option>
            <option value="Middle Class">Middle Class</option>
            <option value="Lower Class">Lower Class</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="formFamilyValue">Family Value</label>
          <select id="formFamilyValue" name="familyValue" value={personalDetails.familyValue} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Traditional">Traditional</option>
            <option value="Moderate">Moderate</option>
            <option value="Liberal">Liberal</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="formUserIncome">User Income</label>
          <input type="number" id="formUserIncome" name="userIncome" value={personalDetails.userIncome} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formOccupation">Occupation</label>
          <input type="text" id="formOccupation" name="occupation" value={personalDetails.occupation} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formHeight">Height (cm)</label>
          <input type="number" id="formHeight" name="height" value={personalDetails.height} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formWeight">Weight (kg)</label>
          <input type="number" id="formWeight" name="weight" value={personalDetails.weight} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formComplexion">Complexion</label>
          <select id="formComplexion" name="complexion" value={personalDetails.complexion} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Fair">Fair</option>
            <option value="Wheatish">Wheatish</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="formDisability">Disability</label>
          <select id="formDisability" name="disability" value={personalDetails.disability} onChange={handleChange}>
            <option value="">Select</option>
            <option value="None">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="formReligion">Religion</label>
          <select id="formReligion" name="religion" value={personalDetails.religion} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="formCaste">Caste</label>
          <input type="text" id="formCaste" name="caste" value={personalDetails.caste} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formSubCaste">Sub-Caste</label>
          <input type="text" id="formSubCaste" name="subCaste" value={personalDetails.subCaste} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formState">State</label>
          <input type="text" id="formState" name="state" value={personalDetails.location.state} onChange={handleLocationChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formDistrict">District</label>
          <input type="text" id="formDistrict" name="district" value={personalDetails.location.district} onChange={handleLocationChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="formHoroscope">Horoscope</label>
          <input type="text" id="formHoroscope" name="horoscope" value={personalDetails.horoscope} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
        <button className="nextbutton" onClick={handleNextClick}>Skip</button>
      </form>
    </>
  );
};

export default Create;
