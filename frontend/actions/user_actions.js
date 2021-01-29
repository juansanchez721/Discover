
import * as UserUtil from '../util/user_api_util'

export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"
const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const receiveUsers = (users) => {
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
