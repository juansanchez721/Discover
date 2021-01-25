import {RECEIVE_ALL_TRACKS } from '../actions/track_actions'



const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {

        case RECEIVE_ALL_TRACKS:
            return action.tracks
        default:
            return oldState
            
    }

}


export default tracksReducer