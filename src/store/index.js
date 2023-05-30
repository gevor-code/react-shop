import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './user/index'
import cart from './cart/index'
import cartReducer from './cart/index'
const reducer = combineReducers({
    user,cart
})

const store = configureStore({
    reducer:{
        cart:cartReducer,
    }
})
export default store;