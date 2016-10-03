import mathjs from 'mathjs'
import { isNumber, isObject, isString } from '@carnesen/checks'

export const MAX_LENGTH = 10

export const exampleExpressions = [
  'det([-1, 2; 3, 1])',
  'foo',
  'e ^ (i pi)',
  '4+4',
  'sin(45 deg) ^ 2',
  '2 ^ 10',
  'mean(0, 1, 2, 3, 4)',
  'i ^ 2',
  'sin(1)^2 + cos(1)^2'
]

export function calculate (expression) {
  const calculation = { expression }
  try {
    calculation.evaluatedExpression = String(mathjs.eval(expression))
  } catch (ex) {
    calculation.evaluatedExpression = `Error: ${ex.message || 'Does not compute'}`
  }
  return calculation
}

export function fixedLengthArrayReducer (value, payload) {
  return [payload, ...value].slice(0, MAX_LENGTH)
}

export function isValidExpression (expression) {
  return isNumber(expression) || isString(expression)
}

export function isValidCalculation (calculation) {
  return isObject(calculation) &&
    isValidExpression(calculation.expression) &&
    isValidExpression(calculation.evaluatedExpression)
}
