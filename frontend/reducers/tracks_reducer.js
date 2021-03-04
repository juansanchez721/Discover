import {RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions'
import merge from 'lodash/merge';



const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    debugger
    let newState = Object.assign({}, oldState)
    switch (action.type) {

        case RECEIVE_ALL_TRACKS:
            return action.tracks
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