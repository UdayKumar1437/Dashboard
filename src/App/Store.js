import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../Slices/AuthenicationSlice"

export const store = configureStore({
  reducer: {
    user: authReducer
  },
})