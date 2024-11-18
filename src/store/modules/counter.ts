import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    name: '测试'
  },
  reducers: {
    changeNameAction(state, { payload }) {
      state.name = payload
    }
  }
})

export const { changeNameAction } = counterSlice.actions
export default counterSlice.reducer
