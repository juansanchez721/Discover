import { ADD_LIKE, RECEIVE_LIKED_TRACKS, REMOVE_LIKE } from '../actions/like_actions'
import {RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions'
import { RECEIVE_USER } from '../actions/user_actions'


const likesReducer = (oldState = {}, action) => {

    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_USER:
            return action.userLikes
        case RECEIVE_LIKED_TRACKS:
            return action.tracks
        case ADD_LIKE:
            return Object.assign({}, oldState, action.track);
        case REMOVE_LIKE:
            delete newState[Object.keys(action.track)[0]]
            return newState;
        default:
            return oldState;
    }

}

export default likesReducer