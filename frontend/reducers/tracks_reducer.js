import {RECEIVE_ALL_TRACKS, RECEIVE_TRACK } from '../actions/track_actions'
import merge from 'lodash/merge';



const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {

        case RECEIVE_ALL_TRACKS:
            return action.tracks
        case RECEIVE_TRACK:
            // const newTrack = { [action.track.id]: action.track };
            return merge({}, oldState, action.track);
        default:
            return oldState
            
    }

}


export default tracksReducer