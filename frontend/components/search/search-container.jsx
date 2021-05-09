import { connect } from "react-redux"
import SearchBar from "./searchbar"
import { openModal, closeModal} from '../../actions/modal_actions';
import { fetchSearchResults, removeSearchResults } from '../../actions/search_actions'


const mSTP = (state) => {
    return {
        currentUser: state.session.username,
        searchResults: state.ui.search
    }
}

const mDTP = (dispatch) => {
    return {
        fetchSearchResults: (entity) => dispatch(fetchSearchResults(entity)),
        removeSearchResults: () => dispatch(removeSearchResults()),
        // openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(mSTP, mDTP)(SearchBar)