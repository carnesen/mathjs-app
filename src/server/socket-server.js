import socketIo from 'socket.io'

import httpServer from './http-server'
import log from './log'

const socketServer = socketIo(httpServer)

socketServer.on('connection', socket => {
  log.info(`Socket client connected ${socket.id}`)

})

export default socketServer
