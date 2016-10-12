import { allCalculationsSlice } from '../slices'

describe('calculations', function () {
  it('does the right thing', function () {
    allCalculationsSlice.unshift(1)
    allCalculationsSlice.value[0].should.equal(1)
  })
})
