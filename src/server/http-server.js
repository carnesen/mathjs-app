import http from 'http'

import app from './app'
import log from './log'
import { port } from './constants'

const httpServer = http.createServer(app)

httpServer.on('listening', () => log.info('Listening on port ' + port))

export default httpServer
