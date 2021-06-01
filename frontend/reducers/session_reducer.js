import { ADD_LIKE } from '../actions/like_actions';
import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_EMAIL_RESPONSE}  from '../actions/session_actions'
import { RECEIVE_TWO_USERS } from '../actions/user_actions'

const defaultArg = Object.freeze({
    id: null
})

const sessionReducer = (oldstate = defaultArg, action) => {
    Object.freeze(oldstate);
    // let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_TWO_USERS:
                const newState = Object.assign({}, oldstate);
                newState['follows'] = action.users[oldstate.id].follows
            return newState
            // case ADD_LIKE:
        case RECEIVE_CURRENT_USER:
            // debugger
            return { id: action.user.id,
                    username: action.user.username,
                    track_likes: action.user.track_likes,
                    follows: action.user.follows,
                    image_url: action.user.image_url,
                    topThreeLikes: action.userLikes
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