import {createSlice} from '@reduxjs/toolkit'

export const Wishslice = createSlice({
    name:'Wishslice',
    initialState: 0,
    reducers: {
        addToWishList:(state,action)=>{
            state = state + action.payload;
            return state;
        }
    }
})

export const {addToWishList} = Wishslice.actions;

export default Wishslice.reducer;