import { OPEN_MODAL, CLOSE_MODAL, DELETE_MODAL, UPDATE_MODAL, EDIT_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action;
    case CLOSE_MODAL:
      return null;
    case DELETE_MODAL:
      return action;
    case UPDATE_MODAL:
      return action
      case EDIT_MODAL:
        return action
    default:
      return state;
  }
}


export default modalReducer