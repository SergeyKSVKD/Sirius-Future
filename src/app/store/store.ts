import { configureStore } from '@reduxjs/toolkit'
import { AppReducer } from './app-slice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
    reducer: {
        AppState: AppReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        trace: true,
        serializableCheck: false,
    })
})