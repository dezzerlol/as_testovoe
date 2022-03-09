import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import TicketsReducer from './TicketsReducer'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'

let reducers = combineReducers({
  ticketsReducer: TicketsReducer,
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))) //store to use with chrome redux extension
// let store = createStore(reducers, applyMiddleware(thunkMiddleware)) //default store

// @ts-ignore
window.__store__ = store

export default store
