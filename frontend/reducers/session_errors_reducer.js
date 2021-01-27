import { CLOSE_MODAL } from '../actions/modal_actions'
import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RECEIVE_EMAIL_RESPONSE, CLEAR_ERRORS} from '../actions/session_actions'




const sessionErrorsReducer = (state=[], action) => {
    debugger
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
        case CLEAR_ERRORS:
        case CLOSE_MODAL:
            return [] //clears the errors
        case RECEIVE_EMAIL_RESPONSE:
            return action.email
        case RECEIVE_ERRORS:
            return action.errors // sets errors to the action's errors
        default:
            return state;
    }

}


export default sessionErrorsReducer