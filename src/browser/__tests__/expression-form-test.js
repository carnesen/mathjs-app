import React from 'react'
import { shallow } from 'enzyme'

import ExpressionForm from '../expression-form/expression-form'

describe('<ExpressionForm />', function () {
  it('renders', function () {
    shallow(<ExpressionForm />)
  })
})
