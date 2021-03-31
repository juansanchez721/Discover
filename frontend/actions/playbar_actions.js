import * as TrackUtil from '../util/track_api_util'
export const PLAY_SONG = "PLAY_SONG"
export const QUEUE_SONG = "QUEUE_SONG"
export const PLAY_QUEUE_SONG = "PLAY_QUEUE_SONG"

export const playSong = (song) => {
    debugger
    return {
        type: PLAY_SONG,
        song    
    }
}

export const queueSong = (trackId) => {
    // debugger
    return {
        type: QUEUE_SONG,
        trackId    
    }
}

export const playQueueSong = (track) => {
    // debugger
    return {
        type: PLAY_QUEUE_SONG,
        track
    }
}

export const fetchQueueTrack = (trackid) => (dispatch) =>
  TrackUtil.fetchTrack(trackid)
  .then((track) => dispatch(playQueueSong(track)));
