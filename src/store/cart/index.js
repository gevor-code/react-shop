import {createSlice} from "@reduxjs/toolkit";
const initialState={
    cartTotalQuantity:0,
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        quantityCart:(state,action)=> {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cart[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cart.push(tempProduct)
            }
        }
        }
})
export const {quantityCart}=cartSlice.actions
export  default cartSlice.reducer