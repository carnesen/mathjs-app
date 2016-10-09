import store from './store'

import { fixedLengthArrayReducer } from './util'

export default store.addSlice({
  name: 'all calculations',
  initialValue: [],
  reducerMap: {
    unshift: fixedLengthArrayReducer
  }
})
