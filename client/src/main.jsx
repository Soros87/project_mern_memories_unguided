import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'

//do this after creating your api and reducer structure
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store =createStore(reducers,compose(applyMiddleware(thunk)))

import App from './App'
import './index.css'

//Provider is used only after store is created
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
