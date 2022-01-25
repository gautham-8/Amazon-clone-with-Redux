import {createSlice} from '@reduxjs/toolkit'

export const CostSlice = createSlice({
    name:'CostSlice',
    initialState: 0,
    reducers: {
        addCost:(state,action)=>{
            state = state + action.payload;
            return state;
        }
    }
})

export const {addCost} = CostSlice.actions;

export default CostSlice.reducer;