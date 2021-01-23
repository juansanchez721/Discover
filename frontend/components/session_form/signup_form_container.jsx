import React from 'react'
import SessionForm from './session_form'
import  { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { signUp, receiveSessionErrorss } from '../../actions/session_actions' ///////////
import { closeModal } from '../../actions/modal_actions'



const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup'
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        processForm: user => dispatch(signUp(user)),
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