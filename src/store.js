import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import state from './state'
import reducers from './reducers'

const middleware = [thunk]

const store = createStore(state, reducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

  )
  )

export default store