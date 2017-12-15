import {combineReducers} from 'redux'
import firstName from './firstName'
import lastName from './lastName'
import biography from './biography'

const rootReducer = combineReducers({
  firstName,
  lastName,
  biography
})

export default rootReducer