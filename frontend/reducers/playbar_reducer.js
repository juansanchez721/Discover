
const defaultArg = Object({
    currentTrack: null,
    queue: [2,1,8,4]

}) 

import { PLAY_SONG, QUEUE_SONG, PLAY_QUEUE_SONG } from "../actions/playbar_actions"

const playbarReducer = (state= defaultArg, action) => {
    // debugger
    let newState = Object.assign({}, state)
    switch (action.type) {
        case PLAY_SONG:
            newState.currentTrack = action.song
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