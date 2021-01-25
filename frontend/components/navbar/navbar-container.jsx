import React from 'react'
import { connect } from 'react-redux'
import NavBar from './navbar'
import { logout } from '../../actions/session_actions'

const mSTP = (state) => {
    return {
        currentUser: state.currentUser
    }
}


const mDTP = dispatch => {
    return {
        debugger
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(NavBar)