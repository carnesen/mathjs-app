import { compose, createStore } from '@carnesen/redux-sliced'
import addActionListenerEnhancer from '@carnesen/redux-add-action-listener-enhancer'
import log from './log'

const reduxDevToolsEnhancer =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : createStore => createStore

const enhancer = compose(addActionListenerEnhancer, reduxDevToolsEnhancer)

const store = createStore(enhancer)

store.addActionListener(action => log.debug(action))

export default store
