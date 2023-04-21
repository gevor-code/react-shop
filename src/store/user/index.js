import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

// Actions
// Example of action
export const fetchProfile = (payload)=> async dispatch =>{
    try {
        const resp = await axios.get('http://localhost:8081/users')
        console.log(resp,'resp')
    }catch (e) {
        console.log(e,'e')
    }
}


// Slice
const slice = createSlice({
    name: 'user',
    initialState: {
        // Example of state
        user: {
            name: 'User'
        },
    },
    reducers: {
        loginSuccess: (state, action) => {
            // Example of Reducer
            // state.user = action.payload;
        },
    },
});

const { loginSuccess } = slice.actions
export default slice.reducer