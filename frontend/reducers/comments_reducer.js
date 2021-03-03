import {RECEIVE_COMMENTS, RECEIVE_COMMENT} from '../actions/comment_actions'


const commentsReducer =(state ={}, action) => {


    debugger
    Object.freeze(state)

    let newState = Object.assign({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            return Object.assign(newState, action.comment)
        default:
            return state;
    }

}

export default commentsReducer