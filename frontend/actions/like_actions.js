import * as LikeUtil from '../util/like_api_util'
import { receiveTrack, receiveTracks } from './track_actions'
import { receiveCurrentUser } from './session_actions'

export const createLike = trackId => dispatch => {
    return LikeUtil.createLike(trackId)
    .then((track) => dispatch(receiveTrack(track)))
}

export const deleteLike = trackId => dispatch => {
    return LikeUtil.deleteLike(trackId)
    .then((track) => dispatch(receiveTrack(track)))
}

export const fetchTrackLikes = userId => dispatch => {
    debugger
    return LikeUtil.fetchTrackLikes(userId)
    .then(tracks => dispatch(receiveTracks(tracks)))
}