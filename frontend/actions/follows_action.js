import * as FollowUtil from '../util/follow_api_util'

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

export const deleteFollow = followId => dispatch => {
    return FollowUtil.deleteFollow(followId)
    // .then((follows) => dispatch(receiveFollows(follows)))
}

export const createFollow = userId => dispatch => {
    return FollowUtil.createFollow(userId)
    .then((iD) => dispatch(receiveFollows(iD)))
}