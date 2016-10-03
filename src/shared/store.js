import { createStore } from '@carnesen/redux-sliced'
import addActionListenerEnhancer from '@carnesen/redux-add-action-listener-enhancer'
import log from './log'

const store = createStore(addActionListenerEnhancer)

store.addActionListener(action => log.debug(action))

export default store
