import http from 'http'
import socketIo from 'socket.io'

import app from './app'
import log from './log'
import store from '../shared/store'

const port = Number(process.env.PORT) || 3000
const httpServer = http.createServer(app)
const socketServer = socketIo(httpServer)

httpServer.on('listening', () => log.info(`Listening on port ${port}`))

socketServer.on('connection', socket => {
  log.info(`Socket client connected ${socket.id}`)
  store.slices.forEach(slice => {
    const action = slice.actionCreators.setValue(slice.value)
    socket.emit('action', action)
  })
})

store.addActionListener(action => socketServer.emit('action', action))

export function start () {
  httpServer.listen(port)
}
