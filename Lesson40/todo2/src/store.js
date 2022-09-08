import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoReducer'
// import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
})