import React from "react";
import {Link} from 'react-router-dom'
import SessionForm from './session_form'
import  { connect } from 'react-redux'
import { login, receiveSessionErrors } from '../../actions/session_actions'

import { closeModal } from '../../actions/modal_actions'
const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'login'
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: user => dispatch(login(user)),
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