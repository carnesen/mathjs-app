import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'

import { calculate } from '../shared/util'
import myCalculationsSlice from './my-calculations-slice'
import expressionSlice from './expression-slice'

export default function ExpressionForm () {
  function mapStateToProps () {
    return {
      ref: component => component && component.focus(),
      value: expressionSlice.value,
      onChange: event => expressionSlice.setValue(event.target.value)
    }
  }

  const ConnectedTextField = connect(mapStateToProps)(TextField)

  function handleSubmit (event) {
    event.preventDefault()
    const calculation = calculate(expressionSlice.value)
    myCalculationsSlice.unshift(calculation)
    fetch('/api/calculation', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify(calculation)
    })
  }

  return (
    <div>
      <h2>Calculate</h2>
      <form onSubmit={handleSubmit}>
        <ConnectedTextField name='expression' />
      </form>
    </div>
  )
}
