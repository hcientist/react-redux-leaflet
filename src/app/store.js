import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
