import {createSlice} from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name:'CartSlice',
    initialState: 0,
    reducers: {
        addToCart:(state,action)=>{
            state = state + action.payload;
            return state;
        }
    }
})

export const {addToCart} = CartSlice.actions;

export default CartSlice.reducer;