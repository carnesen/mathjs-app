import { delay } from '@carnesen/util'

import startSimulator from '../start-simulator'
import calculations from '../../shared/calculations'

describe('app', function () {
  it('starts and stops', async function () {
    calculations.setValue([])
    const stop = startSimulator(0)
    calculations.value.length.should.equal(1)
    await delay(20)
    stop()
    calculations.value.length.should.be.above(1)
    const zeroethCalculation = calculations.value[0]
    await delay(20)
    calculations.value[0].should.equal(zeroethCalculation)
  })
})
