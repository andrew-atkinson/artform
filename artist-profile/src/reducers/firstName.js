import axios from 'axios'

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_FIRST_NAME'
const CREATE = 'CREATE_FIRST_NAME'
const UPDATE = 'UPDATE_FIRST_NAME'
const REMOVE = 'REMOVE_FIRST_NAME'

/* ------------   ACTION CREATORS     ------------------ */

const init = firstName => ({ type: INITIALIZE, firstName })
const create = firstName => ({ type: CREATE, firstName })
const remove = id => ({ type: REMOVE, id })
const update = firstName => ({ type: UPDATE, firstName })

/* ------------       REDUCERS     ------------------ */

export default function reducer(firstName = [], action) {
    switch (action.type) {
    case INITIALIZE:
        return action.firstName

    case CREATE:
        return [action.review, ...firstName]

    case REMOVE:
        return firstName.filter(review => review.id !== action.id)

    case UPDATE:
        return firstName.map(review => (
        action.review.id === review.id ? action.review : review
      ))

    default:
        return firstName
    }
}

/* ------------   THUNK CREATORS     ------------------ */

/* 

add Thunk creators...

*/