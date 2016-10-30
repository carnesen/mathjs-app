import { ConsoleTransport } from '@carnesen/logger'
import { log as webServerLog } from '@carnesen/web-server'

import log from '../shared/log'

webServerLog.pipe(log)

if (process.env.NODE_ENV !== 'test') {
  log.add(new ConsoleTransport())
}

export default log
