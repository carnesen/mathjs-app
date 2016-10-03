import { delay } from '@carnesen/util'

import log from './log'
import { calculate, exampleExpressions } from '../shared/util'
import calculations from '../shared/calculations'

export function* makeExampleExpressionGenerator () {
  while (true) {
    yield * exampleExpressions
  }
}

export default function (averageInterval) {
  averageInterval = averageInterval || 5000
  log.info('Started calculation simulator')
  const generator = makeExampleExpressionGenerator()
  let stopped = false
  async function simulate () {
    while (!stopped) { // eslint-disable-line no-unmodified-loop-condition
      calculations.unshift(calculate(generator.next().value))
      await delay(averageInterval * 2 * Math.random())
    }
  }
  simulate()
  return function stop () {
    if (stopped) return
    stopped = true
    log.info('Stopped calculation simulator')
  }
}
