
// const defaultArg = Object.freeze({
//     id: null
// }) 

import { PLAY_SONG } from "../actions/playbar_actions"

const playbarReducer = (state = null, action) => {
    debugger
    switch (action.type) {
        case PLAY_SONG:
            return { ["currentTrack"]: action.song,
                    ["artist"]: action.user
            }
        default:
            return state
    }

}

export default playbarReducer