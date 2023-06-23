import {createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {toast} from "react-toastify";

// Actions
// Example of action
export const fetchProfile = (payload) => async dispatch => {
    try {
        const resp = await axios.get('http://localhost:8081/users/')
        return resp.data
    } catch (e) {
        toast.error(e.message, 'e')
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
export const getUser = () => async dispatch => {
    try {
        return await axios.get("http://localhost:8081/users")
    } catch (e) {
        toast.error(e.message)
    }
}

export const addCategory = (payload) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8081/categories', payload);
        return response.data;
    } catch (error) {
        toast.error(error.message);
    }
};
export const getAllCategory = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:8081/categories');
        return response.data;
    } catch (error) {
        toast.error(error.message);
    }
};
export const addProduct = (payload) => async (dispatch) => {
    try {
        const resp = await axios.post("http://localhost:8081/product", payload)
        return resp.data
    } catch (e) {
        toast.error(e.message)
    }
};
export const addBlog = (payload) => async (dispatch) => {
    try {
        const resp = await axios.post("http://localhost:8081/blog", payload)
        return resp.data
    } catch (e) {
        toast.error(e.message)
    }
};
export const getBlog = () => async (dispatch) => {
    try {
        const resp = await axios.get("http://localhost:8081/blog?_sort=blog&_order=desc")
        return resp.data
    } catch (error) {
        toast.error(error.message)
    }
}
export const getCateg = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:8081/categories?_sort=category&_order=desc');
        return response.data
    } catch (error) {
        toast.error(error.message);
    }
};
export const getProducts = (payload) => async (dispatch) => {
    try {
        let url = 'http://localhost:8081/product?'

        console.log(payload,'payload')

        if (payload?.sorting){
            url += `_sort=special_price&_order=${payload?.sorting === "HighToLow" ? "desc" : "asc"}`
        }

        if (payload.productByCategories) {
            let categoryParams = payload.productByCategories?.map((category) => `category.category=${category}`).join("&");
            url += `&${categoryParams}`
        }

        if(payload?.range){
            let sortByRange = `special_price_gte=${payload?.range?.min}&special_price_lte=${payload?.range?.max}`
            url += `&${sortByRange}`
        }

        const response = await axios.get(url)
        return response.data;
    } catch (err) {
        toast.error(err.message);
    }
};
export const deleteCategory = (categoryId) => async (dispatch) => {
    try {
        const response = await axios.delete(`http://localhost:8081/categories/${categoryId}`)
        return response.data
    } catch (error) {
        toast.error(error.message)
    }
}
export const deleteBlog = (blogId) => async (dispatch) => {
    try {
        const response = await axios.delete(`http://localhost:8081/blog/${blogId}`)
        return response.data
    } catch (error) {
        toast.error(error.message)
    }
}
export const deleteProduct = (productId) => async (dispatch) => {
    try {
        const response = await axios.delete(`http://localhost:8081/product/${productId}`)
        return response.data
    } catch (err) {
        toast.error(err.message)
    }
}
export const productCategory = (productId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8081/product?.category/${productId}`)
        return response.data
    } catch (error) {
        toast.error(error.message)
    }
}
export const getProductId=(productId)=>async(dispatch)=>{
    try{
        const resp=await axios.get(`http://localhost:8081/product/${productId}`)
        return resp.data
    }catch(error){
        toast.error(error.message)
    }
}
export const getCategoryId = (categoryId) => async (dispatch) => {
    try {
        const resp = await axios.get(`http://localhost:8081/categories/${categoryId}`)
        return resp.data
    } catch (error) {
        toast.error(error.message)
    }
}
export const getBlogById = (blogId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8081/blog/${blogId}`);
        return response.data;
    } catch (error) {
        toast.error(error.message);
    }
};
export const updateCategory = (categoryId, newCategory) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:8081/categories/${categoryId}`, {category: newCategory})
        return response.data
    } catch (e) {
        toast.error(e.message)
    }
}
export const updateBlog = (blogId, newBlog) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:8081/blog/${blogId}`, newBlog);
        return response.data;
    } catch (error) {
        toast.error(error.message);
    }
};
export const updateProduct = (productId, newProduct) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:8081/product/${productId}`, newProduct)
        return response.data
    } catch (error) {
        toast.error(error.message)
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
            state.user = action.payload;
        },
    },
});
const {loginSuccess} = slice.actions
export default slice.reducer