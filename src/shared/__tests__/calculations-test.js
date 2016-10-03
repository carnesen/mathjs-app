import calculations from '../calculations'

describe('calculations', function () {
  it('does the right thing', function () {
    calculations.unshift(1)
    calculations.value[0].should.equal(1)
  })
})
