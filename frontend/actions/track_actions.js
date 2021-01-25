import * as TrackUtil from '../util/track_api_util'

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS"

const receiveTracks = (tracks) => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
})

export const fetchTracks = () => dispatch => (
    TrackUtil.fetchTracks().then(tracks => dispatch(receiveTracks(tracks))
    ))