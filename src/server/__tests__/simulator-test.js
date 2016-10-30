import { delay } from '@carnesen/util'

import { start } from '../simulator'
import { MAX_LENGTH } from '../../shared/util'
import { allCalculationsSlice } from '../../shared/slices'

describe('calculation simulator', function () {
  it('starts and stops', async function () {
    allCalculationsSlice.setValue([])
    const stop = start(1)
    allCalculationsSlice.value.length.should.equal(MAX_LENGTH)
    const topCalculation = allCalculationsSlice.value[0]
    await delay(30)
    const newTopCalculation = allCalculationsSlice.value[0]
    newTopCalculation.should.not.deep.equal(topCalculation)
    stop()
    await delay(30)
    const newNewTopCalculation = allCalculationsSlice.value[0]
    newNewTopCalculation.should.deep.equal(newTopCalculation)
  })
})
