import axios from 'axios'

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_BIOGRAPHIES'
const CREATE = 'CREATE_BIOGRAPHY'
const UPDATE = 'UPDATE_BIOGRAPHY'
const REMOVE = 'REMOVE_BIOGRAPHY'

/* ------------   ACTION CREATORS     ------------------ */

const init = biographies => ({ type: INITIALIZE, biographies })
const create = biography => ({ type: CREATE, biography })
const remove = id => ({ type: REMOVE, id })
const update = biography => ({ type: UPDATE, biography })

/* ------------       REDUCERS     ------------------ */

export default function reducer(biography = [], action) {
    switch (action.type) {
    case INITIALIZE:
        return action.biography

    case CREATE:
        return [action.review, ...biography]

    case REMOVE:
        return biography.filter(review => review.id !== action.id)

    case UPDATE:
        return biography.map(review => (
        action.review.id === review.id ? action.review : review
      ))

    default:
        return biography
    }
}

/* ------------   THUNK CREATORS     ------------------ */

/* 

add Thunk creators...

*/