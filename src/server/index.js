import httpServer from './http-server'
import './socket-server'
import { port } from './constants'
import startSimulator from './start-simulator'

export function start () {
  httpServer.listen(port)
  startSimulator()
}
