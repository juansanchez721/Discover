import * as LikeUtil from '../util/like_api_util'
import { receiveTrack, receiveTracks } from './track_actions'
import { receiveCurrentUser } from './session_actions'


export const RECEIVE_LIKED_TRACKS ="RECEIVE_LIKED_TRACKS"
export const REMOVE_LIKE ="REMOVE_LIKE"
export const ADD_LIKE ="ADD_LIKE"

const receiveLikedTracks = tracks => ({
    type: RECEIVE_LIKED_TRACKS,
    tracks
})

const receiveLikedTrack = track => ({
    type: ADD_LIKE,
    track
})

const removeLikedTrack = track => ({
    type: REMOVE_LIKE,
    track
})

export const createLike = trackId => dispatch => {
    return LikeUtil.createLike(trackId)
    .then((track) => dispatch(receiveTrack(track)))
}

export const deleteLike = trackId => dispatch => {
    return LikeUtil.deleteLike(trackId)
    .then((track) => dispatch(removeLikedTrack(track)))
}

export const fetchTrackLikes = userId => dispatch => {
    debugger
    return LikeUtil.fetchTrackLikes(userId)
    .then(tracks => dispatch(receiveLikedTracks(tracks)))
}