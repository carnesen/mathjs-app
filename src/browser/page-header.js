import React from 'react'

import { helpDialogSlice } from './slices'

export default function PageHeader () {
  const divStyle = {
    position: 'absolute',
    display: 'flex',
    top: 0,
    right: 0,
    width: '10%'
  }
  const iconStyle = {
    width: '40%',
    height: 'auto',
    padding: '5%'
  }
  const imgStyle = {
    width: '100%'
  }
  return (
    <div style={divStyle}>
      <div style={iconStyle}>
        <img style={imgStyle} src='question.svg' onClick={helpDialogSlice.open} />
      </div>
      <div style={iconStyle}>
        <a href='https://github.com/carnesen/mathjs-app'>
          <img style={imgStyle} src='mark-github.svg' />
        </a>
      </div>
    </div>
  )
}
