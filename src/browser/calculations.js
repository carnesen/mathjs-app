import store from '../shared/store'
import { fixedLengthArrayReducer } from '../shared/util'

export default store.addSlice({
  name: 'my-calculations',
  initialValue: [],
  reducerMap: {
    unshift: fixedLengthArrayReducer
  }
})
