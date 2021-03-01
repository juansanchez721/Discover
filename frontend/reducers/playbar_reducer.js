
// const defaultArg = Object.freeze({
//     id: null
// }) 

import { PLAY_SONG } from "../actions/playbar_actions"

const playbarReducer = (state, action) => {
    
    switch (action) {
        case PLAY_SONG:
            return { [action.song.id]: action.song }
        default:
            return null
    }

}

export default playbarReducer