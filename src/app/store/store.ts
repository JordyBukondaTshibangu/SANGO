import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './features/event/eventSlice'

export const store = () => configureStore({
    reducer: {
      event : eventReducer
  },
})

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']