import { connect } from 'react-redux'

import CalculationsList from './calculations-list'
import allCalculationsSlice from '../shared/all-calculations-slice'

function mapStateToProps () {
  return {
    title: 'All Calculations',
    calculations: allCalculationsSlice.value
  }
}

export default connect(mapStateToProps)(CalculationsList)
