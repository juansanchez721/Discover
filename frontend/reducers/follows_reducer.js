import { RECEIVE_ALL_FOLLOWS } from '../actions/follows_action'

const followsReducer = (oldstate={}, action) => {

    debugger
    switch (action.type) {
        case RECEIVE_ALL_FOLLOWS:
            debugger
            return action.follows 
        default:
            return oldstate
    }

}


export default followsReducer