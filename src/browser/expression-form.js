import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import store from '../shared/store'
import { calculate } from '../shared/util'
import calculations from './calculations'

const expressionSlice = store.addSlice({
  name: 'expression',
  initialValue: ''
})

// const messagesSlice = store.addSlice({
//   name: 'messages',
//   initialValue: ''
// })

export default function () {
  function mapStateToProps () {
    return {
      value: expressionSlice.value,
      onChange: event => expressionSlice.setValue(event.target.value)
    }
  }

  const ConnectedTextField = connect(mapStateToProps)(TextField)

  function handleSubmit (event) {
    event.preventDefault()
    const calculation = calculate(expressionSlice.value)
    calculations.unshift(calculation)
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
        <ConnectedTextField />
        <input type='submit' />
      </form>
    </div>
  )
}
