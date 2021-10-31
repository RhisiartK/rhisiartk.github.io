import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import BaseRouterComponent from './components/BaseRouterComponent/BaseRouterComponent'
// import store from './lib/store'
import './styles.scss'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import IndexPage from './pages/index'

// TODO add error boundary
// TODO add memoized callbacks and functions
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/test1" exact>
          <React.Fragment>
            <Link to="/test1">Test 1</Link>
            <Link to="/test2">Test 2</Link>
            <br/>
            Hello from React Test 1 Page!
          </React.Fragment>
        </Route>
        <Route path="/test2" exact>
          <React.Fragment>
            <Link to="/test1">Test 1</Link>
            <Link to="/test2">Test 2</Link>
            <br/>
            Hello from React Test 2 Page!
          </React.Fragment>
        </Route>
        <Route path="/" component={IndexPage}>

        </Route>
      </Switch>
    </HashRouter>
    {/*<Provider store={store}>*/}
    {/*  <BaseRouterComponent/>*/}
    {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
)
