import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  shipping: 50,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity = state.totalQuantity + 1;
      state.totalAmount = state.totalAmount + newItem.price;

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      item.quantity = item.quantity + 1;
      state.totalQuantity = state.totalQuantity + 1;
      state.totalAmount = state.totalAmount + item.price;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item.quantity === 1) {
        return;
      }
      item.quantity = item.quantity - 1;
      state.totalQuantity = state.totalQuantity - 1;
      state.totalAmount = state.totalAmount - item.price;
    },
    reduceItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity = existingItem.quantity - 1;
        state.totalAmount =
          state.totalAmount - existingItem.price;
        state.totalQuantity = state.totalQuantity - 1;
      } else if (
        existingItem &&
        existingItem.quantity === 1
      ) {
        state.items = state.items.filter(
          (item) => item.id !== id
        );
        state.totalAmount =
          state.totalAmount - existingItem.price;
        state.totalQuantity = state.totalQuantity - 1;
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id
      );
      if (existingItem) {
        state.totalQuantity =
          state.totalQuantity - existingItem.quantity;
        state.totalAmount =
          state.totalAmount -
          existingItem.price * existingItem.quantity;
        state.items = state.items.filter(
          (item) => item.id !== id
        );
      }
    },
    clearItem: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  reduceItem,
  deleteItem,
  clearItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
