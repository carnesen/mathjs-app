import mathjs from 'mathjs'

export default function calculate (expression) {
  const result = { expression }
  try {
    result.evaluatedExpression = String(mathjs.eval(expression))
  } catch (ex) {
    result.error = ex.message || 'Does not compute'
  }
  return result
}
