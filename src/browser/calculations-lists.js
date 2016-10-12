import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import { expressionSlice, myCalculationsSlice } from './slices'
import { allCalculationsSlice } from '../shared/slices'

export function CalculationsList ({calculations}) {
  return (
    <div style={{ width: '45%' }}>
      <List style={{ margin: '3%', padding: '3%' }}>{
        calculations.map(({ id, expression, evaluatedExpression }) => {
          const primaryText = (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>{expression}</div>
              <div style={{ fontWeight: 'bolder', fontSize: '150%', margin: '3%' }}> → </div>
              <div>{evaluatedExpression}</div>
            </div>
          )
          const clickHandler = () => expressionSlice.setValue(expression)
          return (
            <div key={id}>
              <ListItem style={{ textAlign: 'center' }} primaryText={primaryText} onClick={clickHandler} />
              <Divider />
            </div>
          )
        })
      }</List>
    </div>
  )
}

CalculationsList.propTypes = {
  calculations: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string,
    expression: React.PropTypes.string,
    evaluatedExpression: React.PropTypes.string
  })).isRequired
}

export function makeConnectedCalculationsList (slice) {
  function mapStateToProps () {
    return {
      calculations: slice.value
    }
  }
  return connect(mapStateToProps)(CalculationsList)
}

export const AllCalculationsList = makeConnectedCalculationsList(allCalculationsSlice)
export const MyCalculationsList = makeConnectedCalculationsList(myCalculationsSlice)
