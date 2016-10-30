import React from 'react'

import HelpDialog from '../help-dialog'
import PageHeader from '../page-header'
import ExpressionForm from '../expression-form'
import { AllCalculationsList, MyCalculationsList } from '../calculations-lists'
import styles from './styles.css'

export default function RootComponent () {
  return (
    <div>
      <PageHeader />
      <HelpDialog />
      <ExpressionForm />
      <div className={styles.wrapper}>
        <AllCalculationsList />
        <MyCalculationsList />
      </div>
    </div>
  )
}
