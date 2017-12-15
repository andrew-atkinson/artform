/* -----------------    ACTIONS     ------------------ */

const UPDATE_BIOGRAPHY = 'UPDATE_BIOGRAPHY'

/* ------------   ACTION CREATORS     ------------------ */

export const biographyActionCreator = biography => {
    return ({type: UPDATE_BIOGRAPHY, biography})
}

/* ------------       REDUCER     ------------------ */

export default function reducer(state = [], action) {
    console.log("testing reducer here:",state, action)
    if (action.type === 'UPDATE_BIOGRAPHY') 
        return action.biography
    return state
}