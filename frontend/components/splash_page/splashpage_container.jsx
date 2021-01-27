import { connect } from "react-redux"
import SplashPage from "./splashpage"
import { fetchTracks } from '../../actions/track_actions'
import { openModal, closeModal} from '../../actions/modal_actions';


const mSTP = (state) => {
    return {

    }
}


const mDTP = (dispatch) => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())

    }
}


export default connect(mSTP, mDTP)(SplashPage)