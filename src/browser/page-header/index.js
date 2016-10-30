import React from 'react'

import { helpDialogSlice } from '../slices'
import styles from './styles.css'

export default function PageHeader () {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <img className={styles.img} src='question.svg' onClick={helpDialogSlice.open} />
      </div>
      <div className={styles.icon}>
        <a href='https://github.com/carnesen/mathjs-app'>
          <img className={styles.img} src='mark-github.svg' />
        </a>
      </div>
    </div>
  )
}
