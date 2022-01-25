import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Slices/Cartslice'
import costReducer from './Slices/Costslice'
import wishReducer from './Slices/Wishslice'

export const Store = configureStore({
    reducer: {
        cart: cartReducer,
        cost: costReducer,
        wish: wishReducer
    }
})