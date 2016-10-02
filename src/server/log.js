import log from '../shared/log'

if (process.env.NODE_ENV !== 'test' && !log.debugLogger.enabled) {
  log.register(log.consoleLogger)
}

export default log
