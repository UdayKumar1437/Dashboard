import { createSlice } from '@reduxjs/toolkit'

const initialState = null

export const AuthenicationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = AuthenicationSlice.actions

export default AuthenicationSlice.reducer