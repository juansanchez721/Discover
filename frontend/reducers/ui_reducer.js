import { combineReducers } from 'redux'
import modalReducer from './modal_reducer';
import playbarReducer from "./playbar_reducer";
import searchReducer from './search_reducer'

const uiReducer = combineReducers({
    modal: modalReducer,
    playbar: playbarReducer,
    search: searchReducer
})


export default uiReducer;