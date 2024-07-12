import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Preference.css';
import MainNavbar from '../MainNavbar';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPartnerPreferences } from '../../../Redux/userSlice'; // Adjust the import path as needed

const PartnerPreference = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [preferences, setPreferences] = useState({
        basic: {

            ageRange: { min: '', max: '' },
            height: '',
            maritalStatus: '',
            motherTongue: '',
            eatingHabits: '',
            drinkingHabits: '',
            smokingHabits: '',
        },
        religious: {
            religion: '',
            caste: '',
            subCaste: '',
           
        },
        professional: {
            education: '',
            employedIn: '',
        
            annualIncome: '',
        },
        location: {
         state:'',
         district:'',
        },
        aboutMyPartner: '',
    });
    useEffect(() => {
        // Add the background class to the body
        document.body.classList.add('body-background');

        // Remove the background class when the component is unmounted
        return () => {
            document.body.classList.remove('body-background');
        };
    }, []);
    const handleChange = (section, name, value) => {
        if (section === 'basic' && name === 'ageMin') {
            setPreferences((prevPreferences) => ({
                ...prevPreferences,
                basic: {
                    ...prevPreferences.basic,
                    ageRange: {
                        ...prevPreferences.basic.ageRange,
                        min: value,
                    },
                },
            }));
        } else if (section === 'basic' && name === 'ageMax') {
            setPreferences((prevPreferences) => ({
                ...prevPreferences,
                basic: {
                    ...prevPreferences.basic,
                    ageRange: {
                        ...prevPreferences.basic.ageRange,
                        max: value,
                    },
                },
            }));
        } else {
            setPreferences((prevPreferences) => ({
                ...prevPreferences,
                [section]: {
                    ...prevPreferences[section],
                    [name]: value,
                },
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting preferences:', preferences);

        try {
            const response = await axios.post('http://localhost:8000/user/preferences', {preferences},{withCredentials: true});
            console.log('Preferences created successfully', response.data);
            dispatch(setPartnerPreferences(preferences)); // Dispatch preferences to Redux store
            navigate('/profile');
        } catch (error) {
            console.error('Error creating preferences:', error.response ? error.response.data : error.message);
        }
    };

    const handleNextClick = () => {
        navigate('/relationship');
    };

    return (
        <>
            <MainNavbar />
            <div className="profile-form">
                <div className="row1">
                    <div className="col-left">
                        <div className="sidebar1">
                            <h3>PARTNER PREFERENCES</h3>
                            <ul>
                                <li><a href="#basic">Basic</a></li>
                                <li><a href="#religious">Religious</a></li>
                                <li><a href="#professional">Professional</a></li>
                                <li><a href="#location">Location</a></li>
                                <li><a href="#about">About My Partner</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="content1">
                            <h2>PARTNER PREFERENCES</h2>
                            <form onSubmit={handleSubmit}>
                                <section id="basic">
                                    <h3>Basic Preferences</h3>
                                    <div className="form-group1">
                                        <label>Groom's Age Range</label>
                                        <div className="age-range">
                                            <input
                                                type="number"
                                                placeholder="Min"
                                                value={preferences.basic.ageRange.min}
                                                onChange={(e) => handleChange('basic', 'ageMin', e.target.value)}
                                            />
                                            <span className="age-range-separator"> - </span>
                                            <input
                                                type="number"
                                                placeholder="Max"
                                                value={preferences.basic.ageRange.max}
                                                onChange={(e) => handleChange('basic', 'ageMax', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group1">
                                        <label>Height</label>
                                        <select onChange={(e) => handleChange('basic', 'height', e.target.value)}>
                                            <option value="">Select Height Range</option>
                                            <option value="150-181">4 Ft 11 In - 5 Ft 11 In / 150 Cms - 181 Cms</option>
                                            <option value="155-185">5 Ft 1 In - 6 Ft 1 In / 155 Cms - 185 Cms</option>
                                        </select>
                                    </div>
                                    <div className="form-group1">
                                        <label>Marital Status</label>
                                        <select onChange={(e) => handleChange('basic', 'maritalStatus', e.target.value)}>
                                            <option value="">Select Marital Status</option>
                                            <option value="Never Married">Never Married</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widowed">Widowed</option>
                                        </select>
                                    </div>
                                    <div className="form-group1">
                                        <label>Eating Habits</label>
                                        <select onChange={(e) => handleChange('basic', 'eatingHabits', e.target.value)}>
                                            <option value="">Select Eating Habits</option>
                                            <option value="Doesn't matter">Doesn't matter</option>
                                            <option value="Vegetarian">Vegetarian</option>
                                            <option value="Non-Vegetarian">Non-Vegetarian</option>
                                            <option value="Eggetarian">Eggetarian</option>
                                        </select>
                                    </div>
                                    <div className="form-group1">
                                        <label>Drinking Habits</label>
                                        <select onChange={(e) => handleChange('basic', 'drinkingHabits', e.target.value)}>
                                            <option value="">Select Drinking Habits</option>
                                            <option value="Doesn't matter">Doesn't matter</option>
                                            <option value="Non-drinker">Non-drinker</option>
                                            <option value="Occasional drinker">Occasional drinker</option>
                                            <option value="Regular drinker">Regular drinker</option>
                                        </select>
                                    </div>
                                    <div className="form-group1">
                                        <label>Smoking Habits</label>
                                        <select onChange={(e) => handleChange('basic', 'smokingHabits', e.target.value)}>
                                            <option value="">Select Smoking Habits</option>
                                            <option value="Doesn't matter">Doesn't matter</option>
                                            <option value="Non-smoker">Non-smoker</option>
                                            <option value="Occasional smoker">Occasional smoker</option>
                                            <option value="Regular smoker">Regular smoker</option>
                                        </select>
                                    </div>
                                </section>

                                <section id="religious">
                                    <h3>Religious Preferences</h3>
                                    <div className="form-group1">
                                        <label>Religion</label>
                                        <select onChange={(e) => handleChange('religious', 'religion', e.target.value)}>
                                            <option value="">Select Religion</option>
                                            <option value="Doesn't matter">Doesn't matter</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Muslim">Muslim</option>
                                            <option value="Christian">Christian</option>
                                            <option value="Others">Others</option>
                                         
                                        </select>
                                    </div>
                                    <div className="form-group1">
                                        <label>Caste</label>
                                        <select onChange={(e) => handleChange('religious', 'caste', e.target.value)}>
                                            <option value="">Select Caste</option>
                                            <option value="Doesn't matter">Doesn't matter</option>
                                            <option value="Nair">Nair</option>
                                            <option value="Ezhava">Ezhava</option>
                                            <option value="Thiyya">Thiyya</option>
                                        </select>
                                    </div>
                                    <div className="form-group1">
                                        <label>Sub Caste</label>
                                        <select onChange={(e) => handleChange('religious', 'subCaste', e.target.value)}>
                                            <option value="">Select Sub Caste</option>
                                            <option value="Doesn't matter">Doesn't matter</option>
                                            <option value="Nair">Nair</option>
                                            <option value="Ezhava">Ezhava</option>
                                            <option value="Thiyya">Thiyya</option>
                                        </select>
                                    </div>
                                </section>

                                <section id="professional">
                                    <h3>Professional Preferences</h3>
                                    <div className="form-group1">
                                        <label>Education</label>
                                        <select onChange={(e) => handleChange('professional', 'education', e.target.value)}>
                                            <option value="">Select Education</option>
                                            <option value="Any">Any</option>
                                            <option value="Bachelors">Bachelors</option>
                                            <option value="Masters">Masters</option>
                                            <option value="PhD">PhD</option>
                                        </select>
                                    </div>
                                    <div className="form-group1">
                                        <label>Employed In</label>
                                        <select onChange={(e) => handleChange('professional', 'employedIn', e.target.value)}>
                                            <option value="">Select Employed In</option>
                                            <option value="Any">Any</option>
                                            <option value="Government">Government</option>
                                            <option value="Private">Private</option>
                                            <option value="Business">Business</option>
                                            <option value="Self Employed">Self Employed</option>
                                        </select>
                                    </div>
                                    <div className="form-group1">
                                        <label>Annual Income</label>
                                        <select onChange={(e) => handleChange('professional', 'annualIncome', e.target.value)}>
                                            <option value="">Select Annual Income</option>
                                            <option value="Any">Any</option>
                                            <option value="Less than 1 Lakh">Less than 1 Lakh</option>
                                            <option value="1-2 Lakhs">1-2 Lakhs</option>
                                            <option value="2-5 Lakhs">2-5 Lakhs</option>
                                            <option value="5-10 Lakhs">5-10 Lakhs</option>
                                        </select>
                                    </div>
                                </section>

                                <section id="location">
                                    <h3>Location Preferences</h3>
                                    <div className="form-group1">
                                        <label>State</label>
                                        <select onChange={(e) => handleChange('location', 'state', Array.from(e.target.selectedOptions, option => option.value))}>
                                            <option value="">Select State</option>
                                            <option value="Any">Any</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="TamilNadu">TamilNadu</option>
                                            <option value="Karnataka">Karnataka</option>
                                        </select>
                                    </div>
                                    <div className="form-group1">
                                        <label>District</label>
                                        <select onChange={(e) => handleChange('location', 'district', Array.from(e.target.selectedOptions, option => option.value))}>
                                            <option value="">Select District</option>
                                            <option value="Any">Any</option>
                                            <option value="kannur">kannur</option>
                                            <option value="Malappuram">Malappuram</option>
                                            <option value="Kochi">Kochi</option>
                                            <option value="Kozhikode">Kozhikode</option>
                                        </select>
                                    </div>
                                </section>

                                <section id="about">
                                    <h3>About My Partner</h3>
                                    <textarea
                                        placeholder="Describe your ideal partner"
                                    ></textarea>
                                </section>

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerPreference;
