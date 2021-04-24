import * as TrackUtil from '../util/track_api_util'
export const PLAY_SONG = "PLAY_SONG"
export const PAUSE_SONG = "PAUSE_SONG"

export const PLAY_QUEUE_SONG = "PLAY_QUEUE_SONG"
export const QUEUE_SONG = "QUEUE_SONG"
export const QUEUE_PAGE_SONG = "QUEUE_PAGE_SONG"
export const CLEAR_PAGE_QUEUE = "CLEAR_PAGE_QUEUE"
export const PLAY_NEW_SONG = "PLAY_NEW_SONG"
export const PLAY_NEXT_SONG = "PLAY_NEXT_SONG"
export const PLAY_PREV_SONG = "PLAY_PREV_SONG"

export const playSong = (song) => {
    return {
        type: PLAY_SONG,
        song    
    }
}

export const pauseSong = () => {
    return {
        type: PAUSE_SONG,
    }
}

export const queueSong = (trackId) => {
    return {
        type: QUEUE_SONG,
        trackId    
    }
}

export const playQueueSong = (track) => {
    return {
        type: PLAY_QUEUE_SONG,
        track    
    }
}

export const queuePageSong = (trackId) => {
    debugger
    return {
        type: QUEUE_PAGE_SONG,
        trackId    
    }
}

export const clearPageQueue = () => {
    debugger
    return {
        type: CLEAR_PAGE_QUEUE,   
    }
}

export const playNewSong = (track) => {
    return {
        type: PLAY_NEW_SONG,
        track
    }
}

export const playNextSong = (track) => {
    return {
        type: PLAY_NEXT_SONG,
        track
    }
}

export const playPrevSong = (track) => {
    return {
        type: PLAY_PREV_SONG,
        track
    }
}

export const fetchNextTrack = (trackid) => (dispatch) =>
  TrackUtil.fetchTrack(trackid)
  .then((track) => dispatch(playNextSong(track)));

  export const fetchPrevTrack = (trackid) => (dispatch) =>
  TrackUtil.fetchTrack(trackid)
  .then((track) => dispatch(playPrevSong(track)));

export const fetchQueueTrack = trackId => dispatch => 
    TrackUtil.fetchTrack(trackId)
    .then((track) => dispatch(playQueueSong(track)))