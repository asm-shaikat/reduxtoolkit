import React from 'react';
import UserSlice from './slices/UserSlice';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer:{
        users: UserSlice
    }
});

export default store;