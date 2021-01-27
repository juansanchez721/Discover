import React from 'react'
import SessionForm from './session_form'
import  { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { signUp, login, searchEmail, clearErrors} from '../../actions/session_actions' ///////////
import { closeModal } from '../../actions/modal_actions'



const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup'
    }
}

const mDTP = (dispatch, ownProps) => {
    debugger
    return {
        clearErrors: () => dispatch(clearErrors()),
        processForm: user => dispatch(signUp(user)),
        demoUserForm: user => dispatch(login(user)),
        validateEmail: email => dispatch(searchEmail(email)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
              Login
            </button>
          ),
          closeModal: () => dispatch(closeModal()),
        //   clearErrors: () => dispatch(receiveSessionErrors([]))
    }
}

export default connect(mSTP, mDTP)(SessionForm)