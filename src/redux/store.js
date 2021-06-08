import {applyMiddleware,createStore} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk]
export default createStore(reducers,applyMiddleware(...middlewares))