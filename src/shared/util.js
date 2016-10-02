export const MAX_LENGTH = 10

export function fixedLengthArrayReducer (value, payload) {
  return [payload, ...value].slice(0, MAX_LENGTH)
}
