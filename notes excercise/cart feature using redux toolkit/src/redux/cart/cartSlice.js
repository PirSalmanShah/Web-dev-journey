import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // array of cart products
  totalQuantity: 0,
  totalAmount: 0,

}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // your logic
      state.items = state.items.filter(i => i.id != action.payload.id)
    },
    clearCart: (state) => {
      // your logic
      state.items.length = 0
    },
    decreaseQuantity: (state, action) => {
      // optional: your logic
      const itemPresent = state.items.find(item => item.id === action.payload.id);
      if (itemPresent.count == 0) {
        return
      }
      else if (itemPresent) {
        itemPresent.count -= 1;

      }
    },
    increaseProductQuantity: (state, action) => {
      const itemPresent = state.items.find(item => item.id === Number(action.payload.id));
      if (itemPresent) {
        itemPresent.count += 1;
      }
      // else{

      //   state.items.push({...action.payload,count:1})
      // }
    },
    totalCal:(state,action)=>{
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.count, 0);
state.totalAmount = state.items.reduce((acc, item) => acc + (item.count * item.price), 0);
      state.totalAmount = state.totalAmount.toFixed(2)
    },


  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseProductQuantity,
  totalCal
} = cartSlice.actions

export default cartSlice.reducer