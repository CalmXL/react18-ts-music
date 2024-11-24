import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  name: string
  direction: 'left' | 'right' | 'up' | 'down'
  names: string[]
}

const initialState: IState = {
  count: 100,
  name: '测试',
  direction: 'left',
  names: []
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeNameAction(state, { payload }: PayloadAction<string>) {
      state.name = payload
    }
  }
})

export const { changeNameAction } = counterSlice.actions
export default counterSlice.reducer
