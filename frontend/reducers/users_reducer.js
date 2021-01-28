import { RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_USER } from '../actions/user_actions' 


const usersReducer = (state ={}, action) => {
debugger
    Object.freeze(state)
    switch(action.type) {
            case LOGOUT_CURRENT_USER:
                // let newState = {}
                // return newState
                return {};
            case RECEIVE_USER:
                return Object.assign({}, state, { [action.user.id]: action.user });
            case RECEIVE_CURRENT_USER:
                return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        default:
            return state;
    }

}



export default usersReducer;