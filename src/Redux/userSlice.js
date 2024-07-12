/*import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    basicDetails: {},
    personalDetails: {},
    partnerPreferences: {},
  },
  reducers: {
    setBasicDetails: (state, action) => {
      state.basicDetails = action.payload;
    },
    setPersonalDetails: (state, action) => {
      state.personalDetails = action.payload;
    },
    setPartnerPreferences: (state, action) => { // Add this reducer
        state.partnerPreferences = action.payload;
    },
  },
});

export const { setBasicDetails, setPersonalDetails , setPartnerPreferences} = userSlice.actions;

export default userSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basicDetails: {},
    personalDetails: {},
    partnerPreferences: {}, // Add this line
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBasicDetails: (state, action) => {
            state.basicDetails = action.payload;
        },
        setPersonalDetails: (state, action) => {
            state.personalDetails = action.payload;
        },
        setPartnerPreferences: (state, action) => { // Add this reducer
            state.partnerPreferences = action.payload;
        },
    },
});

export const { setBasicDetails, setPersonalDetails, setPartnerPreferences } = userSlice.actions;

export default userSlice.reducer;
*/