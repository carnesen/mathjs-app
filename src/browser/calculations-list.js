import React from 'react'
import { List, ListItem } from 'material-ui/List'

import expressionSlice from './expression-slice'

export default function CalculationsList ({title, calculations}) {
  return (
    <div>
      <h2>{ title }</h2>
      <List>{
        calculations.map(({ id, expression, evaluatedExpression }) => {
          const primaryText = `${expression} → ${evaluatedExpression}`
          const clickHandler = () => expressionSlice.setValue(expression)
          return (<ListItem primaryText={primaryText} key={id} onClick={clickHandler} />)
        })
      }</List>
    </div>
  )
}

CalculationsList.propTypes = {
  title: React.PropTypes.string.isRequired,
  calculations: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string,
    expression: React.PropTypes.string,
    evaluatedExpression: React.PropTypes.string
  })).isRequired
}
