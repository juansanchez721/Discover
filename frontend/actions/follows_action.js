import * as FollowUtil from '../util/follow_api_util'
import { receiveCurrentUser } from './session_actions'
export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS'

const receiveFollows = follows => {
    return{
        type: RECEIVE_ALL_FOLLOWS,
        follows
    }
}

export const fetchUserFollows = userId => dispatch => {
    return FollowUtil.fetchUserFollows(userId)
    .then(follows => dispatch(receiveFollows(follows)))
}

export const deleteFollow = userId => dispatch => {
    return FollowUtil.deleteFollow(userId)
    .then((user) => dispatch(receiveCurrentUser(user)) )

    // .then((follows) => dispatch(receiveFollows(follows)))
}

export const createFollow = userId => dispatch => {
    return FollowUtil.createFollow(userId)
    .then((user) => dispatch(receiveCurrentUser(user)) )
    // .then((iD) => dispatch(receiveFollows(iD)))
}



export const createFollowCurrentUser = (currentUserId, userId) => dispatch => {
    return FollowUtil.createFollowCurrentUser(currentUserId,userId)
    // .then((user) => dispatch(receiveCurrentUser(user)) )
    .then((follows) => dispatch(receiveFollows(follows)))
}

export const deleteFollowCurrentUser = (currentUserId, userId) => dispatch => {
    return FollowUtil.deleteFollowCurrentUser(currentUserId,userId)
    // .then((user) => dispatch(receiveCurrentUser(user)) )
    .then((follows) => dispatch(receiveFollows(follows)))
}