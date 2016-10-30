import server from './server'
import { start as startSimulator } from './simulator'

export function start () {
  server.start()
  startSimulator()
}
