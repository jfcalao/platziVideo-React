import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router'
import initialState from './initialState'
import App from './routes/App'



const history=createBrowserHistory()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer())

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <App />

    </Router>
  </Provider>

  , document.getElementById('app'))