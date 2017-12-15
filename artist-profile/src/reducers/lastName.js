/* -----------------    ACTIONS     ------------------ */

const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'

/* ------------   ACTION CREATORS     ------------------ */

export const lastNameActionCreator = lastName => {
    return ({type: UPDATE_LAST_NAME, lastName})
}

/* ------------       REDUCER     ------------------ */

export default function reducer(state = [], action) {
    console.log("testing reducer here:",state, action)
    if (action.type === 'UPDATE_LAST_NAME') 
        return action.lastName
    return state
}