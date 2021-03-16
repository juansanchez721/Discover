import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions'
import {RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions'

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    debugger
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            debugger
            return action.tracks
        // case ADD_LIKE:
        // case REMOVE_LIKE:
        case RECEIVE_TRACK:
            debugger
            // const newTrack = Object.values(action.track)[0];
            //     return newTrack
            // return action.track
            debugger
            return Object.assign({}, oldState, action.track);
        case REMOVE_TRACK:
            delete newState[action.trackId]
            return newState;
        default:
            return oldState
            
    }

}


export default tracksReducer