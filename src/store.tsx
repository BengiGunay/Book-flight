import { configureStore } from '@reduxjs/toolkit'
import searchFlightSlice from './pages/search-flight/redux/slice'
import layoutSlice from './pages/layout/redux/slice'
import bookFlightSlice from './pages/book-flight/redux/slice'

export const store = configureStore({
    reducer: {
        layout: layoutSlice,
        searchFlight: searchFlightSlice,
        bookFlight: bookFlightSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
