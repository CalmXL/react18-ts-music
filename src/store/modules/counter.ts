import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    name: '测试'
  },
  reducers: {}
})

export default counterSlice.reducer
