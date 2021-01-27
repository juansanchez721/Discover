import * as TrackUtil from '../util/track_api_util'

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS"
export const RECEIVE_TRACK = "RECEIVE_TRACK"

const receiveTracks = (tracks) => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
})
const receiveTrack = (track) => ({
    type: RECEIVE_TRACK,
    track
})
export const fetchTracks = () => dispatch => (
    TrackUtil.fetchTracks().then(tracks => dispatch(receiveTracks(tracks))
    ))

    export const fetchTrack = id => dispatch => (
        TrackUtil.fetchTrack(id).then(track => (
          dispatch(receiveTrack(track))
        ))
      );