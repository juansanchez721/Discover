import { ADD_LIKE, RECEIVE_LIKED_TRACKS, REMOVE_LIKE } from '../actions/like_actions'
import {RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions'


const likesReducer = (oldState = {}, action) => {

    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_LIKED_TRACKS:
            debugger
            return action.tracks
        case ADD_LIKE:
            debugger
            return Object.assign({}, oldState, action.track);
        case REMOVE_LIKE:
            debugger
            delete newState[Object.keys(action.track)[0]]
            return newState;
            // case RECEIVE_TRACK:
            // debugger
            // // const newTrack = Object.values(action.track)[0];
            // //     return newTrack
            // // return action.track
            // debugger
            // return Object.assign({}, oldState, action.track);
        default:
            return oldState;
    }

}

export default likesReducer