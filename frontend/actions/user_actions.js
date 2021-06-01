
import * as UserUtil from '../util/user_api_util'
import { receiveCurrentUser } from './session_actions'

export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_TWO_USERS = "RECEIVE_TWO_USERS"

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"
const receiveUser = ({user, userLikes}) => {
    return {
        type: RECEIVE_USER,
        user,
        userLikes
    }
}

export const receiveTwoUsers = (users) => {
    return {
        type: RECEIVE_TWO_USERS,
        users
    }
}

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

export const fetchUser = (userId) => dispatch => {
    return UserUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
}

export const fetchUsers = () => dispatch => {
    return UserUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
}


export const updateUser = (user, userId) => dispatch => {
    return UserUtil.updateUser(user, userId)
    // .then(user => dispatch(receiveUser(user)))
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const fetchCurrentUser = (userId) => dispatch => {
    return UserUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
}