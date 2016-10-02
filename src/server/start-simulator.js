import calculate from '../shared/calculate'
import calculations from '../shared/calculations'
import exampleExpressions from '../shared/example-expressions'
import log from './log'

export function* makeExampleExpressionGenerator () {
  yield * exampleExpressions
}

export default function (interval) {
  const generator = makeExampleExpressionGenerator()
  function func() {
    const expression = gen.next().value
    const result = calculate(expression)

  }
  const id = setInterval(() => {

  }, interval)
  return function stop () {
    clearInterval(id)
  }
}