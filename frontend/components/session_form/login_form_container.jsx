import React from "react";
import {Link} from 'react-router-dom'
import SessionForm from './session_form'
import  { connect } from 'react-redux'
import { login, clearErrors } from '../../actions/session_actions'

import { closeModal } from '../../actions/modal_actions'
const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'login'
    }
}

const mDTP = (dispatch) => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        processForm: user => dispatch(login(user)),
        demoUserForm: user => dispatch(login(user)),
        validateEmail: email => dispatch(searchEmail(email)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
              Signup
            </button>
          ),
          closeModal: () => dispatch(closeModal()),
        //   clearErrors: () => dispatch(receiveSessionErrors([]))
    }
}

export default connect(mSTP, mDTP)(SessionForm)