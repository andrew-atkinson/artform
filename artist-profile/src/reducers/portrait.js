import axios from 'axios'

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_PORTRAIT'
const CREATE = 'CREATE_PORTRAIT'
const UPDATE = 'UPDATE_PORTRAIT'
const REMOVE = 'REMOVE_PORTRAIT'

/* ------------   ACTION CREATORS     ------------------ */

const init = portrait => ({ type: INITIALIZE, portrait })
const create = portrait => ({ type: CREATE, portrait })
const remove = id => ({ type: REMOVE, id })
const update = portrait => ({ type: UPDATE, portrait })

/* ------------       REDUCERS     ------------------ */

export default function reducer(portrait = [], action) {
    switch (action.type) {
    case INITIALIZE:
        return action.portrait

    case CREATE:
        return [action.review, ...portrait]

    case REMOVE:
        return portrait.filter(review => review.id !== action.id)

    case UPDATE:
        return portrait.map(review => (
        action.review.id === review.id ? action.review : review
      ))

    default:
        return portrait
    }
}

/* ------------   THUNK CREATORS     ------------------ */

/* 

add Thunk creators...

*/