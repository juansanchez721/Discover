import { connect } from "react-redux"
import SearchBar from "./searchbar"
import { openModal, closeModal} from '../../actions/modal_actions';



const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        // openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(mSTP, mDTP)(SearchBar)