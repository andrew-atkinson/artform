import axios from 'axios'

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_LAST_NAME'
const CREATE = 'CREATE_LAST_NAME'
const UPDATE = 'UPDATE_LAST_NAME'
const REMOVE = 'REMOVE_LAST_NAME'

/* ------------   ACTION CREATORS     ------------------ */

const init = lastName => ({ type: INITIALIZE, lastName })
const create = lastName => ({ type: CREATE, lastName })
const remove = id => ({ type: REMOVE, id })
const update = lastName => ({ type: UPDATE, lastName })

/* ------------       REDUCERS     ------------------ */

export default function reducer(lastName = [], action) {
    switch (action.type) {
    case INITIALIZE:
        return action.lastName

    case CREATE:
        return [action.review, ...lastName]

    case REMOVE:
        return lastName.filter(review => review.id !== action.id)

    case UPDATE:
        return lastName.map(review => (
        action.review.id === review.id ? action.review : review
      ))

    default:
        return lastName
    }
}

/* ------------   THUNK CREATORS     ------------------ */

/* 

add Thunk creators...

*/