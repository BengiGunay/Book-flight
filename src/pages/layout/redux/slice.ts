import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Index } from './type'

const initialState: Index = {
    headerTheme: 'darkMode',
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        reset: () => initialState,
        commitHeaderTheme: (state, action: PayloadAction<string>) => {
            state.headerTheme = action.payload
        },
    },
})

export const { reset, commitHeaderTheme } = layoutSlice.actions

export default layoutSlice.reducer
