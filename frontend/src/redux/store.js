import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './reducers/userSlice';
import commentSlice from './reducers/commentSlice';


const store = configureStore({
    reducer: {
        users: usersSlice,
        comments: commentSlice
    },
});

export default store;