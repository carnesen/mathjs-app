import React from 'react'

import HelpDialog from './help-dialog'
import PageHeader from './page-header'
import ExpressionForm from './expression-form'
import { AllCalculationsList, MyCalculationsList } from './calculations-lists'

export default function RootComponent () {
  return (
    <div>
      <PageHeader />
      <HelpDialog />
      <ExpressionForm />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AllCalculationsList />
        <MyCalculationsList />
      </div>
    </div>
  )
}
