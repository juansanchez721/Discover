import { connect } from "react-redux"
import {logout} from '../../actions/session_actions'
import { openModal, closeModal} from '../../actions/modal_actions';
import SplashPageInfo from './greeting'

const mSTP = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

 const mDTP = dispatch => {
     return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())

     }
 }

 export default connect(mSTP, mDTP)(SplashPageInfo)