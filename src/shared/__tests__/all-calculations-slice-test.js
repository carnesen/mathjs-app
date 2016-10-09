import allCalculationsSlice from '../all-calculations-slice'

describe('calculations', function () {
  it('does the right thing', function () {
    allCalculationsSlice.unshift(1)
    allCalculationsSlice.value[0].should.equal(1)
  })
})
