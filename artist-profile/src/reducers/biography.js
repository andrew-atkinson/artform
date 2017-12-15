/* -----------------    ACTIONS     ------------------ */

const UPDATE_BIOGRAPHY = 'UPDATE_BIOGRAPHY'

/* ------------   ACTION CREATOR     ------------------ */

export const biographyActionCreator = biography => {
    return ({type: UPDATE_BIOGRAPHY, biography})
}

/* ------------       REDUCER     ------------------ */

export default function reducer(state = [], action) {
    if (action.type === 'UPDATE_BIOGRAPHY') 
        return action.biography
    return state
}