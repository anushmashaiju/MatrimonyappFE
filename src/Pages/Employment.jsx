import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Employment = () => {
    const navigate = useNavigate();
    const [employmentType, setEmploymentType] = useState('');
    const [details, setDetails] = useState({
        companyName: '',
        designation: '',
        location: '',
        title: '',
        expertiseLevel: ''
    });

    const handleEmploymentTypeChange = (type) => {
        setEmploymentType(type);
        setDetails({
            companyName: '',
            designation: '',
            location: '',
            title: '',
            expertiseLevel: ''
        });
    };

    const handleChange = (field, value) => {
        setDetails(prevDetails => ({
            ...prevDetails,
            [field]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(details);
        // Add logic to handle form submission (e.g., API call)
    };
    const handleNextClick = () => {
       navigate('/relationship'); // Redirect to the next page
    };


    return (
        <div >
            <h1>Employment</h1>
            <div >
                <label>
                    <input
                        type="radio"
                        name="employmentType"
                        value="employeeEmployer"
                        checked={employmentType === 'employeeEmployer'}
                        onChange={() => handleEmploymentTypeChange('employeeEmployer')}
                    />
                    Employee/Employer
                </label>
                <label>
                    <input
                        type="radio"
                        name="employmentType"
                        value="jobSeeker"
                        checked={employmentType === 'jobSeeker'}
                        onChange={() => handleEmploymentTypeChange('jobSeeker')}
                    />
                    Job Seeker
                </label>
            </div>

            <form onSubmit={handleSubmit}>
                {employmentType === 'employeeEmployer' && (
                    <div >
                        <input
                            type="text"
                            placeholder="Company Name"
                            value={details.companyName}
                            onChange={(e) => handleChange('companyName', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Designation"
                            value={details.designation}
                            onChange={(e) => handleChange('designation', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={details.location}
                            onChange={(e) => handleChange('location', e.target.value)}
                        />
                    </div>
                )}

                {employmentType === 'jobSeeker' && (
                    <div >
                        <input
                            type="text"
                            placeholder="Title"
                            value={details.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                        />
                        <select
                            value={details.expertiseLevel}
                            onChange={(e) => handleChange('expertiseLevel', e.target.value)}
                        >
                            <option value="">Select Expertise Level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>
                )}

                {employmentType && (
                    <button type="submit">Submit</button>
                )}
            </form>
            <button className='nextbutton' onClick={handleNextClick}>next</button>
        </div>
    );
};

export default Employment;
