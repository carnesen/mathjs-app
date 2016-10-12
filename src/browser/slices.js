import store from '../shared/store'
import { fixedLengthArrayReducer } from '../shared/util'

export const myCalculationsSlice = store.addSlice({
  name: 'my calculations',
  initialValue: [],
  reducerMap: {
    unshift: fixedLengthArrayReducer
  }
})

export const expressionSlice = store.addSlice({
  name: 'expression',
  initialValue: ''
})

export const helpDialogSlice = store.addSlice({
  name: 'help dialog',
  initialValue: false,
  reducerMap: {
    open: value => true,
    close: value => false
  }
})
