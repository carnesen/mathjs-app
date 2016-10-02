import { createStore } from '@carnesen/redux-sliced'
import addActionListenerEnhancer from '@carnesen/redux-add-action-listener-enhancer'
import log from './log'

const store = createStore(addActionListenerEnhancer)

store.addActionListener(action => log.info(action))

export default store
