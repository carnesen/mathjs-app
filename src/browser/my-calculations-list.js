import { connect } from 'react-redux'

import CalculationsList from './calculations-list'
import myCalculationsSlice from './my-calculations-slice'

function mapStateToProps () {
  return {
    title: 'My Calculations',
    calculations: myCalculationsSlice.value
  }
}

export default connect(mapStateToProps)(CalculationsList)
