import { createSlice } from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

// const fetchFromLocalStorage = () => {
//     let cart = localStorage.getItem('cart');
//     if (cart) {
//         return JSON.parse(localStorage.getItem('cart'));
//     } else {
//         return [];
//     }
// };

// const storeInLocalStorage = (data) => {
//     localStorage.setItem('cart', JSON.stringify(data));
// };

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            console.log('newItem : ', newItem);
            const exitsItem = state.itemsList.find((item) => item.id === newItem._id);
            if (exitsItem) {
                exitsItem.quantity++;
                exitsItem.totalPrice += newItem.price;
            } else {
                state.itemsList.push({
                    id: newItem._id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    image: newItem.image,
                });
                state.totalQuantity++;
            }
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const exitstingItem = state.itemsList.find((item) => item.id === id);
            if (exitstingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter((item) => item.id !== id);
                state.totalQuantity--;
            } else {
                exitstingItem.quantity--;
                exitstingItem.totalPrice = exitstingItem.totalPrice - exitstingItem.price;
            }
        },
        // clearCart(state) {
        //     state.data = [];
        //     storeInLocalStorage(state.data);
        // },
        // getCartTotal(state) {
        //     state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
        //         return (cartTotal += cartItem.totalPrice);
        //     }, 0);
        //     state.totalItem = state.data.length;
        // },
    },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
