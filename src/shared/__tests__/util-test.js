import { exampleCalculations, isValidCalculation, calculate, fixedLengthArrayReducer, MAX_LENGTH }
  from '../util'

describe('util', function () {
  it('calculate does the right thing on a bad expression', function () {
    const expression = 'foo'
    const calculation = calculate(expression)
    calculation.expression.should.equal(expression)
    calculation.evaluatedExpression.should.match(/^Error: Undefined symbol/)
  })

  it('calculate does the right thing on a good expression', function () {
    const expression = '4+4'
    const calculation = calculate(expression)
    calculation.expression.should.equal(expression)
    calculation.evaluatedExpression.should.equal('8')
  })

  it('calculate returns a valid calculation on all example expressions', function () {
    exampleCalculations.forEach(calculation => {
      isValidCalculation(calculation).should.equal(true)
    })
  })

  it('fixedLengthArrayReducer', function () {
    const item = 1
    const newValue = fixedLengthArrayReducer(new Array(MAX_LENGTH), item)
    newValue.length.should.equal(MAX_LENGTH)
    newValue[0].should.equal(item)
  })
})
