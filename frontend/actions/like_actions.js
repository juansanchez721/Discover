import * as LikeUtil from '../util/like_api_util'
import { receiveTrack, receiveTracks } from './track_actions'
import { receiveCurrentUser } from './session_actions'


export const RECEIVE_LIKED_TRACKS ="RECEIVE_LIKED_TRACKS"
export const REMOVE_LIKE ="REMOVE_LIKE"
export const ADD_LIKE ="ADD_LIKE"

const receiveLikedTracks = ({tracks, pageTracks}) => ({
    type: RECEIVE_LIKED_TRACKS,
    tracks,
    pageTracks
})

const receiveLikedTrack = track => ({
    type: ADD_LIKE,
    track
})

const removeLikedTrack = track => ({
    type: REMOVE_LIKE,
    track
})

export const createLike = (trackId, location) => dispatch => {
    if (location === "Profile"){
        return LikeUtil.createLike(trackId, location)
        .then((track) => dispatch(receiveTrack(track)))
    } else {

        return LikeUtil.createLike(trackId, location)
        // .then((track) => dispatch(receiveTrack(track)))
        .then(({user, userLikes}) => dispatch(receiveCurrentUser({user, userLikes})))
    }

    // .then((track) => dispatch(receiveLikedTrack(track))) // needed for currentUser
}

export const deleteLike = (trackId, location) => dispatch => {
    if (location === "Profile"){
        return LikeUtil.deleteLike(trackId, location)
        .then((track) => dispatch(receiveTrack(track)))
    } else {

        return LikeUtil.deleteLike(trackId, location)
        // .then((track) => dispatch(receiveTrack(track)))
        .then(({user, userLikes}) => dispatch(receiveCurrentUser({user, userLikes})))
    }
}

export const createCurrentUserLike = (trackId, location) => dispatch => {
    return LikeUtil.createLike(trackId, location)
    // .then(({user, userLikes}) => dispatch(receiveCurrentUser({user,userLikes})))
    .then((track) => dispatch(receiveLikedTrack(track))) // needed for currentUser
}

export const deleteCurrentUserLike = (trackId, location)  => dispatch => {
    return LikeUtil.deleteLike(trackId, location)
    .then((track) => dispatch(receiveLikedTrack(track)))
    // .then(({user, userLikes}) => dispatch(receiveCurrentUser({user,userLikes})))

}

export const deleteAndRemoveLike = (trackId, location) => dispatch => {
    return LikeUtil.deleteLike(trackId, location)
    // .then((track) => dispatch(receiveTrack(track)))
    .then((track) => dispatch(removeLikedTrack(track))) // needed for currentuserlikespage

}

export const fetchTrackLikes = userId => dispatch => {
    return LikeUtil.fetchTrackLikes(userId)
    .then(tracks => dispatch(receiveLikedTracks(tracks)))
}