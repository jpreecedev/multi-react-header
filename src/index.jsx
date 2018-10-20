import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './global/styles.scss'

import { StateProvider } from '@jpreecedev/multi-react-global'
import App from './components/App'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <StateProvider value={{ name: 'Bob' }}>
    <App />
  </StateProvider>,
  document.querySelector('header')
)
