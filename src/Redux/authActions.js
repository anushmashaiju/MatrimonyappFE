// src/Redux/authActions.js

import axios from 'axios';
import { setBasicDetails } from './userSlice';

export const login = (credentials) => async (dispatch) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      const { user } = response.data;
      dispatch(setBasicDetails({
        ...user,
        isAuthenticated: true,
        isAdmin: user.isAdmin, // Correct field name for admin
      }));
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  
  export const logout = () => (dispatch) => {
    dispatch(setBasicDetails({
      isAuthenticated: false,
      isAdmin: false,
    }));
  };
  