import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const RECEIVE_EMAIL_RESPONSE = "RECEIVE_EMAIL_RESPONSE"
export const CLEAR_ERRORS = "CLEAR_ERRORS"



export const clearErrors = () => {
    return {
      type: CLEAR_ERRORS
    }
  }

export const receiveCurrentUser = ({user, userLikes}) => ({
        type: RECEIVE_CURRENT_USER,
        user,
        userLikes
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

const receiveEmail = (email) => ({
    type: RECEIVE_EMAIL_RESPONSE,
    email
})

export const searchEmail = (email) => dispatch => (
    SessionAPIUtil.searchEmail(email).then(message => (
        dispatch(receiveEmail(message))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
      ))
)
 


export const login = user => dispatch => (
     SessionAPIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
          ))
)

// or .then(user => dispatch(logoutCurrentUser()))

export const signUp = user => dispatch => (
     SessionAPIUtil.signUp(user).then(user => (
         dispatch(receiveCurrentUser(user))
         ), err => (
            dispatch(receiveErrors(err.responseJSON))
          ))
    )


export const logout = () => dispatch => (
    SessionAPIUtil.logout()
   .then(() => dispatch(logoutCurrentUser()),
   )
)