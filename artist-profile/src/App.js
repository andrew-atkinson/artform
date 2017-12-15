import {connect} from 'react-redux'
import Main from './components/Main'
import store from './store'

/* ACTION CREATORS */
import {firstNameActionCreator} from './reducers/firstName'
import {lastNameActionCreator} from './reducers/lastName'
import {biographyActionCreator} from './reducers/biography'

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFirstName: firstName => dispatch(firstNameActionCreator(firstName)),
    dispatchLastName: lastName => dispatch(lastNameActionCreator(lastName)),
    dispatchBiography: biography => dispatch(biographyActionCreator(biography))
  }
}

const App = connect(null, mapDispatchToProps)(Main)

export default App