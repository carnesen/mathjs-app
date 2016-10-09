import { delay } from '@carnesen/util'

import startSimulator from '../start-simulator'
import allCalculationsSlice from '../../shared/all-calculations-slice'

describe('calculation simulator', function () {
  it('starts and stops', async function () {
    allCalculationsSlice.setValue([])
    const stop = startSimulator(1)
    allCalculationsSlice.value.length.should.equal(1)
    await delay(20)
    stop()
    allCalculationsSlice.value.length.should.be.above(1)
    const zeroethCalculation = allCalculationsSlice.value[0]
    await delay(20)
    allCalculationsSlice.value[0].should.equal(zeroethCalculation)
  })
})
