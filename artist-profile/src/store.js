import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'

export const initialState = {firstName: 'Your first name', lastName: 'last name', biography: 'biography here'}

let store = createStore(rootReducer, initialState, composeWithDevTools())

export default store