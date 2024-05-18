import { configureStore } from '@reduxjs/toolkit'

import AddReducer from './add/addSlice'

const store = configureStore({
  reducer: {
    Add: AddReducer
  }
})

export default store