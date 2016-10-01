import httpServer from './http-server'
import './socket-server'
import { port } from './constants'

httpServer.listen(port)

