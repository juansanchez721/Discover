import {RECEIVE_ALL_TRACKS } from '../actions/track_actions'



const tracksReducer = (oldState = {}, action) => {

    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            return Object.assign({}, oldState, action.tracks)
        default:
            return oldState
            
    }

}


export default tracksReducer