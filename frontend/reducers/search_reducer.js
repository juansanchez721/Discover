import {
  CLEAR_SEARCH,
  RECEIVE_SEARCH_RESULTS,
} from "../actions/search_actions";

const searchReducer = (oldState = {}, action) => {
//   debugger;
  Object.freeze(oldState);
  // let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
    //   debugger;
      return action.results;
    case CLEAR_SEARCH:
    //   debugger;
      return {};
    default:
      return oldState;
  }
};

export default searchReducer;
