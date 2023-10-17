import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        totalQuantity: 0,
        totalAmount: 0,
    },

    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex >= 0) {
                state.cart[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cart.push(tempProduct);
            }

        },
    }

});


export const { addToCart } = cartSlice.actions;
export const showData = (state) => {
    return {
        cart: state.cart.cart,
        totalQuantity: state.cart.totalQuantity,
        totalAmount: state.cart.totalAmount
    }
};
export default cartSlice.reducer;
