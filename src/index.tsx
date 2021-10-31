import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import BaseRouterComponent from './components/BaseRouterComponent/BaseRouterComponent'
// import store from './lib/store'
import './styles.scss'

// TODO add error boundary
// TODO add memoized callbacks and functions
ReactDOM.render(
  <React.StrictMode>
    Hello from React!
    {/*<Provider store={store}>*/}
    {/*  <BaseRouterComponent/>*/}
    {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
)
