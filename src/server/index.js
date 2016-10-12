import { start as startServer } from './server'
import { start as startSimulator } from './simulator'

export function start () {
  startServer()
  startSimulator()
}
