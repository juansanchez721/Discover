import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_EMAIL_RESPONSE}  from '../actions/session_actions'
import { RECEIVE_TWO_USERS } from '../actions/user_actions'

const defaultArg = Object.freeze({
    id: null
})

const sessionReducer = (oldstate = defaultArg, action) => {
    debugger
    Object.freeze(oldstate);
    // let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_TWO_USERS:
                const newState = Object.assign({}, oldstate);
                newState['follows'] = action.users[oldstate.id].follows
            return newState
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id,
                    username: action.currentUser.username,
                    trackLikes: action.currentUser.trackLikes,
                    follows: action.currentUser.follows
                }
        case LOGOUT_CURRENT_USER:
            return defaultArg
        
        case RECEIVE_EMAIL_RESPONSE:
            return defaultArg
        
        default:
            return oldstate
    }
}

export default sessionReducer;