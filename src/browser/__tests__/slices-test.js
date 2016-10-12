import { myCalculationsSlice } from '../slices'

describe('calculations', function () {
  it('does the right thing', function () {
    myCalculationsSlice.unshift(1)
    myCalculationsSlice.value[0].should.equal(1)
  })
})
