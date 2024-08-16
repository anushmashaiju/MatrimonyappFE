// src/Redux/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basicDetails: {},
    personalDetails: {},
    partnerPreferences: {},
    onlineUsers: [],
    messages: [], // Ensure messages is initialized as an array
    arrivalMessage: null,
    socket: null,
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
        setPartnerPreferences: (state, action) => {
            state.partnerPreferences = action.payload;
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
        setMessages: (state, action) => {
            state.messages = Array.isArray(action.payload) ? action.payload : []; // Ensure action.payload is an array
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        setArrivalMessage: (state, action) => {
            state.arrivalMessage = action.payload;
        },
        setSocket: (state, action) => {
            state.socket = action.payload;
        },
    },
});

export const {
    setBasicDetails,
    setPersonalDetails,
    setPartnerPreferences,
    setOnlineUsers,
    setMessages,
    addMessage,
    setArrivalMessage,
    setSocket,
} = userSlice.actions;

export default userSlice.reducer;
