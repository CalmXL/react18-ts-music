import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from '@/App'

import './assets/css/index.less'
import store from './store'
import { theme } from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  // 通过 react-redux 中的  Provider 将 App 进行包裹, 并将  store  作为 props.
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
