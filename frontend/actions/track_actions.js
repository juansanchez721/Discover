import * as TrackUtil from '../util/track_api_util'

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS"
export const RECEIVE_TRACK = "RECEIVE_TRACK"
export const REMOVE_TRACK = "REMOVE_TRACK"


const receiveTracks = (tracks) => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
})
const receiveTrack = (track) => ({
    type: RECEIVE_TRACK,
    track
})
const removeTrack = (trackId) => ({
  type: REMOVE_TRACK,
  trackId
})

export const deleteTrack = trackId => dispatch => {
  return TrackUtil.deleteTrack(trackId)
  .then(() => dispatch(removeTrack(trackId)))
}

export const fetchTracks = () => dispatch => (
    TrackUtil.fetchTracks().then(tracks => dispatch(receiveTracks(tracks))
    ))

export const fetchSingleUserTracks = (userId) => dispatch => (
      TrackUtil.fetchSingleUserTracks(userId)
      .then(tracks => dispatch(receiveTracks(tracks))
  ))


    export const fetchTrack = id => dispatch => (
        TrackUtil.fetchTrack(id).then(track => (
          dispatch(receiveTrack(track))
        ))
      );

      export const createTrack = track => dispatch => {
        return TrackUtil.createTrack(track)
        .then(track => dispatch(receiveTrack(track)))
      }