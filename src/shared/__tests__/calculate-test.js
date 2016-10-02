import calculate from '../calculate'

describe('calculate', function () {
  it('does the right thing on a bad expression', function () {
    const expression = 'foo'
    const result = calculate(expression)
    result.expression.should.equal(expression)
    result.error.should.match(/^Undefined symbol/)
  })
  it('does the right thing on a good expression', function () {
    const expression = '4+4'
    const result = calculate(expression)
    result.expression.should.equal(expression)
    result.evaluatedExpression.should.equal(8)
  })
})
