import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../features/counter/counterSlice'
import { postsApi } from '../services/postsApi'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
    devTools: import.meta.env.DEV, // Redux DevTools у development
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
