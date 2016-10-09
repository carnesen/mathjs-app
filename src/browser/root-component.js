import React from 'react'
import ExpressionForm from './expression-form'
import MyCalculationsList from './my-calculations-list'
import AllCalculationsList from './all-calculations-list'

export default function RootComponent () {
  return (
    <div>
      <h1>Mathjs calculator</h1>
      <div style={{ display: 'flex' }}>
        <MyCalculationsList />
        <ExpressionForm />
        <AllCalculationsList />
      </div>
    </div>
  )
}
