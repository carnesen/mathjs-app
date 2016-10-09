import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'

import io from 'socket.io-client'

import RootComponent from './root-component'
import store from '../shared/store'

const socket = io()

socket.on('action', action => store.dispatch(action))

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <RootComponent />
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
