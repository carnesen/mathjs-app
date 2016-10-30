import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import { allCalculationsSlice } from '../../shared/slices'
import { expressionSlice, myCalculationsSlice } from '../slices'
import styles from './styles.css'

export function CalculationsList ({calculations}) {
  return (
    <div className={styles.wrapper}>
      <List>{
        calculations.map(({ id, expression, evaluatedExpression }) => {
          const primaryText = (
            <div className={styles.calculation}>
              <span>{expression}</span>
              <span className={styles.arrow} > → </span>
              <span>{evaluatedExpression}</span>
            </div>
          )
          const clickHandler = () => expressionSlice.setValue(expression)
          return (
            <div key={id}>
              <ListItem primaryText={primaryText} onClick={clickHandler} />
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
