import socketIo from 'socket.io'

import store from '../shared/store'
import httpServer from './http-server'
import log from './log'

const socketServer = socketIo(httpServer)

socketServer.on('connection', socket => {
  log.info(`Socket client connected ${socket.id}`)
  store.slices.forEach(slice => {
    const action = slice.actionCreators.setValue(slice.value)
    socket.emit('action', action)
  })
})

store.addActionListener(action => socketServer.emit('action', action))

export default socketServer
