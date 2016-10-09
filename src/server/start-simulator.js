import { delay } from '@carnesen/util'

import log from './log'
import { exampleCalculations } from '../shared/util'
import allCalculationsSlice from '../shared/all-calculations-slice'

export function* calculationGeneratorFunction () {
  while (true) {
    yield * exampleCalculations
  }
}

export default function (averageInterval) {
  averageInterval = averageInterval || 10000
  log.info('Started calculation simulator')
  const generator = calculationGeneratorFunction()
  let stopped = false
  async function simulate () {
    while (!stopped) { // eslint-disable-line no-unmodified-loop-condition
      allCalculationsSlice.unshift(generator.next().value)
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
