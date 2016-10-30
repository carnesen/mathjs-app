import React from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import pkg from '../../../package.json'
import { helpDialogSlice } from '../slices'
import styles from './styles.css'

function Info ({children}) {
  return (<p className={styles.info}>{children}</p>)
}

Info.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default function HelpDialog () {
  const actions = [
    <FlatButton
      label='OK'
      primary
      onClick={helpDialogSlice.close}
      keyboardFocused
    />
  ]

  const mapStateToProps = () => ({ open: helpDialogSlice.value })

  function Component ({ open }) {
    const props = {
      actions,
      modal: false,
      open,
      onRequestClose: helpDialogSlice.close
    }
    return (
      <Dialog {...props}>
        <h4 className={styles.title}>{pkg.name}@{pkg.version}</h4>
        <Info>
          Type an expression into the "Calculate" box and press enter to evaluate its value.
        </Info>
        <Info>
          Trigonometric functions, matrices, and complex numbers
          <a href='http://mathjs.org/docs/'> are all supported</a>
        </Info>
        <Info>
          The column on the left lists calculations from across the web.
        </Info>
        <Info>
          The column on the right lists the calculations submitted in this browser session.
        </Info>
        <Info>
          Click on any calculation to insert its expression into the "Calculate" box.
        </Info>
      </Dialog>
    )
  }

  Component.propTypes = { open: React.PropTypes.bool.isRequired }

  const ConnectedComponent = connect(mapStateToProps)(Component)

  return <ConnectedComponent />
}
