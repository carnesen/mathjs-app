import { fixedLengthArrayReducer, MAX_LENGTH } from '../util'

describe('util', function () {
  it('fixedLengthArrayReducer', function () {
    const item = 1
    const newValue = fixedLengthArrayReducer(new Array(MAX_LENGTH), item)
    newValue.length.should.equal(MAX_LENGTH)
    newValue[0].should.equal(item)
  })
})
