import myCalculationsSlice from '../my-calculations-slice'

describe('calculations', function () {
  it('does the right thing', function () {
    myCalculationsSlice.unshift(1)
    myCalculationsSlice.value[0].should.equal(1)
  })
})
