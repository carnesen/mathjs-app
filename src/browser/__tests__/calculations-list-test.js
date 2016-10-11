import React from 'react'
import { shallow } from 'enzyme'

import { exampleCalculations } from '../../shared/util'
import CalculationsList from '../calculations-list'

describe('<CalculationsList />', function () {
  it('renders', function () {
    shallow(<CalculationsList calculations={exampleCalculations} title='foo' />)
  })
})
