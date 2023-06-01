import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    quantity: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        quantityCart: (state, action) => {
            state.quantity = action.payload
        },
    },
});

export const { quantityCart } = cartSlice.actions;
export default cartSlice.reducer;