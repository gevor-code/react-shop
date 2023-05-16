import {createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {toast} from "react-toastify";

// Actions
// Example of action
export const fetchProfile = (payload) => async dispatch => {
    try {
        const resp = await axios.get('http://localhost:8081/users/')
        console.log(resp, 'resp')
    } catch (e) {
        console.log(e, 'e')
    }
}
export const regUser = (payload) => async dispatch => {
    try {
        return await axios.post('http://localhost:8081/users', payload)
    } catch (e) {
        toast.error(e.message);
    }
}
export const fetchAllUsers = (payload) => async dispatch => {
    try {
        return await axios.get('http://localhost:8081/users')
    } catch (e) {
        toast.error(e.message)
    }
}
export const logUser = (payload) => async dispatch => {
    try {
        return await axios.get("http://localhost:8081/users")
    } catch (e) {
        toast.error(e.message)
    }
}
export const addCategory = (payload) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8081/create-category', payload);
        return response.data;
    } catch (error) {
        toast.error(error.message);
    }
};
export const getAllCategory=(payload)=>async(dispatch)=>{
    try{
        const responsive=await axios.get("http://localhost:8081/create-category")
        return responsive.data
    }catch (e){
        toast.error(e.message)
    }
}

export const addProduct = (payload) => async (dispatch) => {
    try {
        const resp = await axios.post("http://localhost:8081/create-product", payload)
        return resp.data
    } catch (e) {
            toast.error(e.message)
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

const {loginSuccess} = slice.actions
export default slice.reducer