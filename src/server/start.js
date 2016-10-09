import httpServer from './http-server'
import './socket-server'
import { port } from './constants'
import startSimulator from './start-simulator'

httpServer.listen(port)
startSimulator()
