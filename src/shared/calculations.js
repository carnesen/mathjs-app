import store from './store'

import { fixedLengthArrayReducer } from './util'

export default store.addSlice({
  name: 'calculations',
  initialValue: [],
  reducerMap: {
    unshift: fixedLengthArrayReducer
  }
})
