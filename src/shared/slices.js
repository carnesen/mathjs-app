import store from './store'

import { fixedLengthArrayReducer } from './util'

export const allCalculationsSlice = store.addSlice({
  name: 'all calculations',
  initialValue: [],
  reducerMap: {
    unshift: fixedLengthArrayReducer
  }
})
