import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER}  from '../actions/session_actions'

const defaultArg = Object.freeze({
    id: null
})

const sessionReducer = (oldstate = defaultArg, action) => {
    // debugger
    Object.freeze(oldstate);
    // let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id }
        case LOGOUT_CURRENT_USER:
            return defaultArg
        default:
            return oldstate
    }
}

export default sessionReducer;