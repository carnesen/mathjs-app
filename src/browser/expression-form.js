import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'

import { calculate } from '../shared/util'
import { expressionSlice, myCalculationsSlice } from './slices'

export default function ExpressionForm () {
  function mapStateToProps () {
    return {
      ref: component => component && component.focus(),
      value: expressionSlice.value,
      fullWidth: true,
      floatingLabelText: 'Calculate',
      hintText: '4+4',
      onChange: event => expressionSlice.setValue(event.target.value)
    }
  }

  const ConnectedTextField = connect(mapStateToProps)(TextField)

  function handleSubmit (event) {
    event.preventDefault()
    const expression = expressionSlice.value
    if (!expression) return
    const calculation = calculate(expression)
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
      <form onSubmit={handleSubmit}>
        <div style={{ width: '30%', margin: '0 auto' }}>
          <ConnectedTextField name='expression' />
        </div>
      </form>
    </div>
  )
}
