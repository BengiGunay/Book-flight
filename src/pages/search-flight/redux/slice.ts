import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Flight, Form, Index } from './type'

const initialState: Index = {
    formValues: null,
    flightList: [],
}

export const searchFlightSlice = createSlice({
    name: 'searchFlight',
    initialState,
    reducers: {
        reset: () => initialState,
        commitFormValues: (state, action: PayloadAction<Form>) => {
            state.formValues = action.payload
        },
        commitSelectedFlights: (state, action: PayloadAction<Flight[]>) => {
            state.flightList = action.payload
        },
    },
})

export const { reset, commitFormValues, commitSelectedFlights } =
    searchFlightSlice.actions

export default searchFlightSlice.reducer
