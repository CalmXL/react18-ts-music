import { configureStore } from '@reduxjs/toolkit'

import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'
import counterReducer from './modules/counter'

import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'

// 1. 创建一个 store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})

// const state = store.getState()
// type StateType = typeof state

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// 定义 hooks 类型 r
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
