/* -----------------    ACTIONS     ------------------ */

const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'

/* ------------   ACTION CREATORS     ------------------ */

export const firstNameActionCreator = firstName => {
    return ({type: UPDATE_FIRST_NAME, firstName})
}

/* ------------       REDUCER     ------------------ */

export default function reducer(state = [], action) {
    console.log("testing reducer here:",state, action)
    if (action.type === 'UPDATE_FIRST_NAME') 
        return action.firstName
    return state
}