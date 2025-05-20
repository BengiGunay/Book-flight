import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Index } from './type'

const initialState: Index = {
    orderCriteria: 'ecoFly',
    selectedSubCategoryStatus: '',
    promotionCodeState: false,
    selectedPrice: 0,
    selectedCurrency: '',
}

export const bookFlightSlice = createSlice({
    name: 'bookFlight',
    initialState,
    reducers: {
        reset: () => initialState,

        commitOrderCriteria: (state, action: PayloadAction<string>) => {
            state.orderCriteria = action.payload
        },
        commitSelectedSubCategoryStatus: (
            state,
            action: PayloadAction<string>
        ) => {
            state.selectedSubCategoryStatus = action.payload
        },
        commitPromotionCodeState: (state, action: PayloadAction<boolean>) => {
            state.promotionCodeState = action.payload
        },
        commitSelectedPrice: (state, action: PayloadAction<number>) => {
            state.selectedPrice = action.payload
        },
        commitSelectedCurrency: (state, action: PayloadAction<string>) => {
            state.selectedCurrency = action.payload
        },
    },
})

export const {
    reset,
    commitSelectedPrice,
    commitOrderCriteria,
    commitSelectedSubCategoryStatus,
    commitPromotionCodeState,
    commitSelectedCurrency,
} = bookFlightSlice.actions

export default bookFlightSlice.reducer
