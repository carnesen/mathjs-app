import { delay } from '@carnesen/util'

import log from './log'
import { exampleCalculations, MAX_LENGTH } from '../shared/util'
import { allCalculationsSlice } from '../shared/slices'

export function* calculationGeneratorFunction () {
  while (true) {
    yield * exampleCalculations
  }
}

export function start (averageInterval) {
  averageInterval = averageInterval || 10000
  log.info('Started calculation simulator')
  const generator = calculationGeneratorFunction()
  const simulateOne = () => allCalculationsSlice.unshift(generator.next().value)
  for (let i = 0; i < MAX_LENGTH; i++) simulateOne()
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
