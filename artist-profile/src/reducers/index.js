import {combineReducers} from 'redux'
import firstName from './firstName'
import lastName from './lastName'
import biography from './biography'
import portrait from './portrait' 

const rootReducer = combineReducers({
  firstName,
  lastName,
  biography,
  portrait
})

export default rootReducer