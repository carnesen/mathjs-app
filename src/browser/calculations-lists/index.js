import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import { allCalculationsSlice } from '../../shared/slices'
import { expressionSlice, myCalculationsSlice } from '../slices'
import styles from './styles.css'

const calculationT = {
  id: React.PropTypes.string,
  expression: React.PropTypes.string,
  evaluatedExpression: React.PropTypes.string
}

function Calculation (props) {
  const primaryText = (
    <div className={styles.calculation}>
      <span>{props.expression}</span>
      <span className={styles.arrow}> → </span>
      <span>{props.evaluatedExpression}</span>
    </div>
  )
  const clickHandler = () => expressionSlice.setValue(props.expression)
  return (<ListItem primaryText={primaryText} onClick={clickHandler} />)
}

Calculation.propTypes = calculationT

export function CalculationsList ({calculations}) {
  return (
    <div className={styles.wrapper}>
      <List>
        <Divider />
        {
          calculations.map(calculation => (
            <div key={calculation.id}>
              <Calculation {...calculation} />
              <Divider />
            </div>
          ))
        }
      </List>
    </div>
  )
}

CalculationsList.propTypes = {
  calculations: React.PropTypes.arrayOf(React.PropTypes.shape(calculationT)).isRequired
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
