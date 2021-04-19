
const defaultArg = Object({
    currentTrack: null,
    isPlaying: false,
    queue: []

}) 

import { PLAY_SONG, 
    QUEUE_SONG, 
    PLAY_QUEUE_SONG, 
    PAUSE_SONG } from "../actions/playbar_actions"

const playbarReducer = (state= defaultArg, action) => {
    debugger
    let newState = Object.assign({}, state)
    switch (action.type) {
        case PLAY_SONG:
            newState.currentTrack = action.song
            newState.isPlaying = true
            return newState
        
        case PAUSE_SONG:
            newState.isPlaying = false
            return newState

        case PLAY_QUEUE_SONG:
                newState.currentTrack = Object.values(action.track)[0]
                return newState
    

        case QUEUE_SONG:
            newState.queue.push(action.trackId)
        default:
            return state
    }

}

export default playbarReducer