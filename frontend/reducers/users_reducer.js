import { RECEIVE_CURRENT_USER,
        LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_USER, 
        RECEIVE_ALL_USERS, 
        RECEIVE_TWO_USERS} from '../actions/user_actions' 


const usersReducer = (state ={}, action) => {
    Object.freeze(state)
    switch(action.type) {
            case LOGOUT_CURRENT_USER:
                return {};

            case RECEIVE_TWO_USERS:
                const newState = Object.assign({}, state)
                return Object.assign(newState, action.users)
            case RECEIVE_ALL_USERS:
                return action.users

            case RECEIVE_USER:
                return { [action.user.id]: action.user };

            case RECEIVE_CURRENT_USER:
                // return { [action.user.id]: action.user };
                return Object.assign({}, state, { [action.user.id]: action.user })
        
            default:
                return state;
    }

}



export default usersReducer;