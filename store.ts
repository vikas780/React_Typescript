import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './starter/09-rtk/slice/CounterSlice'
const Store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
})

export default Store

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
