import {RECEIVE_COMMENTS} from '../actions/comment_actions'


const commentsReducer =(state ={}, action) => {

    debugger
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments
    
        default:
            return state;
    }

}

export default commentsReducer