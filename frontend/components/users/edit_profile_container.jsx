import { connect } from 'react-redux'
import {updateUser} from '../../actions/user_actions'
import { closeModal } from "../../actions/modal_actions"
import EditModal from './edit_profile'

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    // debugger
    return {
        updateUser: (user, userId) => dispatch(updateUser(user, userId)),
        closeModal: ()=> dispatch(closeModal())   
    }
}


export default connect(mSTP,mDTP)(EditModal)